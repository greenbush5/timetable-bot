const red = require(`../../models/raspSchema`);

const {
  MessageActionRow,
	Modal,
	MessageSelectMenu
} = require('discord.js');

const dataMap = new Map();

module.exports = {
  execute(interaction) {
  const modal = new Modal()
      .setCustomId('cabinetMod')
      .setTitle(`Добавить кабинет:`);
    const favoriteColorInput = new TextInputComponent()
      .setCustomId('cabinetId')
      .setLabel("Введите иномер кабинета")
      .setStyle('SHORT');
    const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
    modal.addComponents(firstActionRow);
    await interaction.showModal(modal);
  },
};
