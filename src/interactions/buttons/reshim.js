const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	async execute(interaction) {
		const plansOptions = resik.map((subject) => ({
			label: subject,
			value: subject.replace(/ /g, '_').toLowerCase()
		}));
		
		const subjectsRow = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('resikADD')
				.setPlaceholder('ПРЕДМЕТ')
				.addOptions(plansOptions)
		);
		
		await interaction.reply({
			content: 'Выберите желаемый план:',
			components: [subjectsRow],
			ephemeral: true
		});
	}
};