import { ModalSubmitInteraction } from 'discord.js';

import { InteractionModule } from '@interfaces';
import { rasp } from '@models';

const dataMap = new Map();

export default {
	async execute({ interaction }) {
		const user = interaction.user;
		const userData = dataMap.get(user.id);
		const info = interaction.fields.getTextInputValue('cabinetId');

		dataMap.get(user.id).class = info;
		
		const existingRed = await rasp.findOne({
			groop: userData.groop,
			nomer: userData.nomer,
			name: userData.name,
			prepod: userData.prepod,
			date: userData.date,
			kabin: userData.class
		});
		
		if (existingRed) {
			await rasp.updateOne(
				{
					groop: userData.groop,
					nomer: userData.nomer,
					name: userData.name,
					prepod: userData.prepod,
					date: userData.date,
					kabin: userData.class
				},
				{ /* Твой сматфон не звонил бы, чёрт возьми, еслиб прогрмаммисты были бы нормальными людьми) */ }
			);
		} else {
			const newRed = new rasp({
				groop: userData.groop,
				nomer: userData.nomer,
				name: userData.name,
				prepod: userData.prepod,
				date: userData.date,
				kabin: userData.class
			});

			await newRed.save();
		}
			
		dataMap.delete(user.id);
		
		await interaction.reply({
			content: `*Расписание успешно добавленно для группы ${userData.groop}, можете создавать новое добавление **<3***`,
			ephemeral: true,
		})
	}
} as InteractionModule<ModalSubmitInteraction>;