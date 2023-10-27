import { ModalSubmitInteraction } from 'discord.js';

import { InteractionModule } from '@interfaces';
import { resik } from '@models';

export default {
	async execute({ client, interaction }) {
		const info = interaction.fields.getTextInputValue('resikId');
		const selectedSubject = client.selectedSubject;
		
		const existingPlan = await resik.findOne({
			name: selectedSubject
		});
		
		if (existingPlan) {
			existingPlan.info = info;
			
			await existingPlan.save();
			await interaction.update('Успешно сохранено!');
		} else {
			const newPlan = new resik({
				name: selectedSubject,
				info: info,
			});

			await newPlan.save();
			await interaction.update('Успешно сохранено!');
		}
	}
} as InteractionModule<ModalSubmitInteraction>;