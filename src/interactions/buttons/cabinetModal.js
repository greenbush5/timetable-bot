const { MessageActionRow, Modal } = require('discord.js');

module.exports = {
	async execute(interaction) {
		const modal = new Modal()
			.setCustomId('cabinetMod')
			.setTitle(`Добавить кабинет:`);
		
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('cabinetId')
			.setLabel("Введите иномер кабинета")
			.setStyle('SHORT');
		
		const firstActionRow = new MessageActionRow()
			.addComponents(favoriteColorInput);

		modal.addComponents(firstActionRow);
		
		await interaction.showModal(modal);
	}
};