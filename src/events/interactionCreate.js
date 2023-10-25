module.exports = {
	name: 'interactionCreate',

	async execute(client, interaction) {
		if (!interaction.isChatInputCommand()) {
            return;
        }

		const command = client.commands.get(interaction.commandName);

        if (!command) {
            return;
        }

		const now = Date.now();
		const cooldowns = client.cooldowns.get(command.data.name);

        if (cooldowns) {
            if (cooldowns.has(interaction.user.id)) {
                const expirationTime = cooldowns.get(interaction.user.id) || (now + 1 * 1000);

                if (now < expirationTime) {
                    const left = (expirationTime - now) / 1000;

                    interaction.reply({
                        content: `Пожалуйста подождите ${left.toFixed(1)} секунд между запросами!`,
                        ephemeral: true
                    });

                    return;
                }
            }
        }

		try {
            const result = await command.execute.bind(command)({ client, interaction });

            if (cooldowns) {
                const cooldown = (Number(result) || command.cooldown || 5) * 1000;

                cooldowns.set(interaction.user.id, now + cooldown);
                setTimeout(() => cooldowns?.delete(interaction.user.id), cooldown);
            }
        } catch (error) {
            console.error(error.stack);

            const embed = new EmbedBuilder();

            embed.setColor(client.Config.colors.fail);
            embed.setTitle('**Критическая ошибка**');
            embed.setDescription(`Произошла критическая ошибка во время выполнения данной команды`);
            embed.setTimestamp(new Date());

            interaction.channel?.send({
                content: `<@!${interaction.user.id}>`,
                embeds: [embed],
				ephemeral: true
            });
        }
	}
};