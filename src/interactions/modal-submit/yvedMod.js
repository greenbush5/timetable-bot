const gryppa = require(`../../models/grypSchema`);

module.exports = {
	async execute(interaction) {
		const notificationText = interaction.fields.getTextInputValue('yvedId');
		
		const selectedGroup = await gryppa.findOne({
			Name: interaction.client.selectedSubject
		});
		
		if (selectedGroup) {
			const channelString = selectedGroup.yvedomlenie;
			const channelId = channelString.replace(/\D/g, '');
			const channel = interaction.guild.channels.cache.get(channelId);
			
			if (channel) {
				await channel.send(notificationText);
				interaction.reply({ content: 'Уведомление успешно отправлено.', ephemeral: true });
			} else {
				interaction.reply({ content: 'Канал не найден.', ephemeral: true });
			}
		} else {
			interaction.reply({ content: 'Ошибка: не найдена группа.', ephemeral: true });
		}
	}
};