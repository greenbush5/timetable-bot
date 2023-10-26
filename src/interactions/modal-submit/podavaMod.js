const podanoo = require(`../../models/podavaSchema`);

module.exports = {
	async execute(interaction) {
		const info = interaction.fields.getTextInputValue('podavaId');
		const selectedSubject = interaction.client.selectedSubject;
		
		const existingPlan = await podanoo.findOne({
			name: selectedSubject
		});
		
		if (existingPlan) {
			existingPlan.info = info;

			await existingPlan.save();
			await interaction.update('Успешно сохранено');
		} else {
			const newPlan = new podanoo({
				name: selectedSubject,
				info: info,
			});

			await newPlan.save();
			await interaction.update('Успешно сохранено');
		}
	}
};