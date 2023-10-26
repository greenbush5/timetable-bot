const plane = require(`../../models/planSchema`);

const {
  MessageActionRow,
	Modal,
	MessageSelectMenu
} = require('discord.js');


module.exports = {
  execute(interaction) {
    const info = interaction.fields.getTextInputValue('HitId');
		const selectedSubject = interaction.client.selectedSubject;

		const existingPlan = await plane.findOne({ name: selectedSubject });

		if (existingPlan) {
			existingPlan.info = info;
			await existingPlan.save();
			await interaction.update('Успешно сохранено');
		} else {
			const newPlan = new plane({
				name: selectedSubject,
				info: info,
			});
			await newPlan.save();
			await interaction.update('Успешно сохранено');
		}
  },
};
