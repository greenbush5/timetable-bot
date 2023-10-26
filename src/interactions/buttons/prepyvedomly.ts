import { prepod } from 'src/models';

import { InteractionModule } from 'src/interfaces';
import { MessageActionRow, MessageSelectMenu, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const grypy = await prepod.find({ }, 'Name');
		
		const grypaOptions = grypy.map(grypa => ({
			label: grypa.Name ?? 'Неизвестно',
			value: grypa.Name ?? 'Неизвестно'
		}));

		const selectMenu = new MessageSelectMenu()
			.setCustomId('prepinfo')
			.setPlaceholder('ПРЕПОДАВАТЕЛЬ')
			.addOptions(grypaOptions);
		
		const grypaRow = new MessageActionRow()
			.addComponents(selectMenu);
		
		await interaction.reply({
			content: 'Выберите нужного преподавателя для оповещения:',
			components: [grypaRow],
			ephemeral: true
		});
	}
} as InteractionModule<ButtonInteraction>;