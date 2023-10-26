const {
  MessageActionRow,
  Modal,
  TextInputComponent
} = require('discord.js');

module.exports = {
  execute(interaction) {
    const selectedSubject = interaction.values[0];

		interaction.client.selectedSubject = selectedSubject;

		const modal = new Modal()
			.setCustomId('prepinfoMod')
			.setTitle(`Уведомить ${selectedSubject}:`);
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('prepinfoId')
			.setLabel("Введите уведомление преподавателя")
			.setStyle('PARAGRAPH');
		const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
  },
};
