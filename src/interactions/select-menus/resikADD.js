const { MessageActionRow, Modal } = require('discord.js');

module.exports = {
	async execute(interaction) {
		const selectedSubject = interaction.values[0];
		interaction.client.selectedSubject = selectedSubject;
		
		const modal = new Modal()
			.setCustomId('resikMod')
			.setTitle(`Добавить/изменить информацию:`);

		const favoriteColorInput = new TextInputComponent()
			.setCustomId('resikId')
			.setLabel("Введите информацию об выбранном пункте")
			.setStyle('PARAGRAPH');
		
		const firstActionRow = new MessageActionRow()
			.addComponents(favoriteColorInput);
		
		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	}
};