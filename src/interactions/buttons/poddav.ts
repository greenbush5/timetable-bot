import { podava } from '@data';

import { InteractionModule } from '@interfaces';
import { MessageActionRow, MessageSelectMenu, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const plansOptions = podava.map(subject => ({
			label: subject,
			value: subject.replace(/ /g, '_').toLowerCase()
		}));

		const selectMenu = new MessageSelectMenu()
			.setCustomId('podavaADD')
			.setPlaceholder('РАЗДЕЛ')
			.addOptions(plansOptions);
		
		const subjectsRow = new MessageActionRow()
			.addComponents(selectMenu);
			
		await interaction.reply({
			content: 'Выберите желаемый раздел:',
			components: [subjectsRow],
			ephemeral: true
		});
	}
} as InteractionModule<ButtonInteraction>;