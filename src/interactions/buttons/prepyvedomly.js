const prepod = require(`../../models/prepodSchema`);
const {
  MessageActionRow,
	MessageSelectMenu
} = require('discord.js');


module.exports = {
  execute(interaction) {
    const grypy = await prepod.find({}, 'Name');

		const grypaOptions = grypy.map((grypa) => ({
			label: grypa.Name,
			value: grypa.Name,
		}));

		const grypaRow = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('prepinfo')
				.setPlaceholder('ПРЕПОДАВАТЕЛЬ')
				.addOptions(grypaOptions),
		);

		await interaction.reply({
			content: 'Выберите нужного преподавателя для оповещения:',
			components: [grypaRow],
			ephemeral: true
		});
  },
};
