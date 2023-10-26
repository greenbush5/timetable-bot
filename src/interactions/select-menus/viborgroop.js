const gryppa = require(`../../models/grypSchema`);

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
			.setCustomId('yvedMod')
			.setTitle(`Уведомить группу ${selectedSubject}:`);
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('yvedId')
			.setLabel("Введите уведомление для группы")
			.setStyle('PARAGRAPH');
		const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
  },
};
