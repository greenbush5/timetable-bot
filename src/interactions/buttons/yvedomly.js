const gryppa = require(`../../models/grypSchema`);

const {
  MessageActionRow,
	Modal,
	MessageSelectMenu
} = require('discord.js');


module.exports = {
  execute(interaction) {
    const grypy = await gryppa.find({}, 'Name');

		const grypaOptions = grypy.map((grypa) => ({
			label: grypa.Name,
			value: grypa.Name,
		}));

		const grypaRow = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('viborgroop')
				.setPlaceholder('ГРУППА')
				.addOptions(grypaOptions),
		);

		await interaction.reply({
			content: 'Выберите нужную группу для оповещения:',
			components: [grypaRow],
			ephemeral: true
		});
  },
};
