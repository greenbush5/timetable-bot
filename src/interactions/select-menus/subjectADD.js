const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

module.exports = {
	async execute(interaction) {
		const selectedSubject = interaction.values[0];
		
		// Сохраните selectedSubject в контексте взаимодействия
		interaction.client.selectedSubject = selectedSubject;
		
		const modal = new Modal()
			.setCustomId('HitMod')
			.setTitle(`Добавить/изменить план:`);

		const favoriteColorInput = new TextInputComponent()
			.setCustomId('HitId')
			.setLabel("Введите информацию об учебном плане")
			.setStyle('PARAGRAPH');

		const firstActionRow = new MessageActionRow()
			.addComponents(favoriteColorInput);

		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	}
};