const podanoo = require(`../../models/podavaSchema`);

const {
  MessageActionRow,
	MessageSelectMenu
} = require('discord.js');


module.exports = {
  execute(interaction) {
    const plansOptions = podava.map((subject) => ({
			label: subject,
			value: subject.replace(/ /g, '_').toLowerCase(),
		}));

		const subjectsRow = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('podavaADD')
				.setPlaceholder('РАЗДЕЛ')
				.addOptions(plansOptions),
		);

		await interaction.reply({
			content: 'Выберите желаемый раздел:',
			components: [subjectsRow],
			ephemeral: true
		});
  },
};
