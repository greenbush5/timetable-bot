import { resik } from 'src/data';

import { InteractionModule } from 'src/interfaces';
import { MessageActionRow, MessageSelectMenu, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const plansOptions = resik.map(subject => ({
			label: subject,
			value: subject.replace(/ /g, '_').toLowerCase()
		}));

		const selectMenu = new MessageSelectMenu()
			.setCustomId('resikADD')
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