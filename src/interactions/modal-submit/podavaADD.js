const { Modal, TextInputComponent, MessageActionRow } = require('discord.js');

module.exports = {
	async execute(interaction) {
		const selectedSubject = interaction.values[0];
		
		interaction.client.selectedSubject = selectedSubject;
		
		const modal = new Modal()
			.setCustomId('podavaMod')
			.setTitle(`Добавить/изменить раздел:`);
		
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('podavaId')
			.setLabel("Введите информацию нужную информацию")
			.setStyle('PARAGRAPH');
		
		const firstActionRow = new MessageActionRow()
			.addComponents(favoriteColorInput);
		
		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	}
}