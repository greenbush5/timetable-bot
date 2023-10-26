import { ModalSubmitInteraction } from 'discord.js';

import { InteractionModule } from 'src/interfaces';
import { podava } from 'src/models';

export default {
	async execute({ client, interaction }) {
		const info = interaction.fields.getTextInputValue('podavaId');
		const selectedSubject = client.selectedSubject;
		
		const existingPlan = await podava.findOne({
			name: selectedSubject
		});
		
		if (existingPlan) {
			existingPlan.info = info;

			await existingPlan.save();
			await interaction.update('Успешно сохранено');
		} else {
			const newPlan = new podava({
				name: selectedSubject,
				info: info,
			});

			await newPlan.save();
			await interaction.update('Успешно сохранено');
		}
	}
} as InteractionModule<ModalSubmitInteraction>;