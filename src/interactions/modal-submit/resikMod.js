const resiki = require(`../../models/resikMod`);

const {
  MessageActionRow,
	MessageSelectMenu
} = require('discord.js');


module.exports = {
  execute(interaction) {
    const info = interaction.fields.getTextInputValue('resikId');
		const selectedSubject = interaction.client.selectedSubject;

		const existingPlan = await resiki.findOne({ name: selectedSubject });

		if (existingPlan) {
			existingPlan.info = info;
			await existingPlan.save();
			await interaction.update('Успешно сохранено');
		} else {
			const newPlan = new resiki({
				name: selectedSubject,
				info: info,
			});
			await newPlan.save();
			await interaction.update('Успешно сохранено');
		}
  },
};
