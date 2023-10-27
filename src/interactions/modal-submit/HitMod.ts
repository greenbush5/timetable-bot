import { ModalSubmitInteraction } from 'discord.js';

import { InteractionModule } from '@interfaces';
import { plan } from '@models';

export default {
	async execute({ client, interaction }) {
		const info = interaction.fields.getTextInputValue('HitId');
		const selectedSubject = client.selectedSubject;
		
		const existingPlan = await plan.findOne({
			name: selectedSubject
		});
		
		if (existingPlan) {
			existingPlan.info = info;

			await existingPlan.save();
			await interaction.update('Успешно сохранено!');
		} else {
			const newPlan = new plan({
				name: selectedSubject,
				info: info,
			});

			await newPlan.save();
			await interaction.update('Успешно сохранено!');
		}
	}
} as InteractionModule<ModalSubmitInteraction>;