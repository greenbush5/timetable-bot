const { readdirSync } = require('fs');

module.exports = {
  name: 'interactionCreate',
  once: false,
  async execute(interaction, client) {
    if (!interaction.isButton() && !interaction.isSelectMenu()) return;

    if (interaction.isButton()) {
      const { customId } = interaction;
      try {
        const button = require(`../../interactions/buttons/${customId}.js`);
        button.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Произошла ошибка при выполнении кнопки.', ephemeral: true });
      }
    }

    if (interaction.isSelectMenu()) {
      const { customId } = interaction;
      try {
        const selectMenu = require(`../../interactions/select-menus/${customId}.js`);
        selectMenu.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Произошла ошибка при выполнении селект-меню.', ephemeral: true });
      }
    }

    if(interaction.isModalSubmit()){
			const { customId } = interaction;
      try {
        const modalSubmit = require(`../../interactions/modal-submit/${customId}.js`);
        modalSubmit.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Произошла ошибка при выполнении модального окна.', ephemeral: true });
      }
		}
  },
};
