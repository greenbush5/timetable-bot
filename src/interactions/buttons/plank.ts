import { plans } from '@data';

import { InteractionModule } from '@interfaces';
import { MessageActionRow, MessageSelectMenu, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const plansOptions = plans.map(subject => ({
			label: subject,
			value: subject.replace(/ /g, '_').toLowerCase()
		}));

		const selectMenu = new MessageSelectMenu()
			.setCustomId('subjectADD')
			.setPlaceholder('ПРЕДМЕТ')
			.addOptions(plansOptions);
		
		const subjectsRow = new MessageActionRow()
			.addComponents(selectMenu);
			
		await interaction.reply({
			content: 'Выберите желаемый план:',
			components: [subjectsRow],
			ephemeral: true
		});
	}
} as InteractionModule<ButtonInteraction>;