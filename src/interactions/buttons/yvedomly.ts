import { gryp } from 'src/models';

import { InteractionModule } from 'src/interfaces';
import { MessageActionRow, MessageSelectMenu, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const grypy = await gryp.find({ }, 'Name');
		
		const grypaOptions = grypy.map(grypa => ({
			label: grypa.Name ?? 'Неизвестно',
			value: grypa.Name ?? 'Неизвестно'
		}));

		const selectMenu = new MessageSelectMenu()
			.setCustomId('viborgroop')
			.setPlaceholder('ГРУППА')
			.addOptions(grypaOptions);
		
		const grypaRow = new MessageActionRow()
			.addComponents(selectMenu);
		
		await interaction.reply({
			content: 'Выберите нужную группу для оповещения:',
			components: [grypaRow],
			ephemeral: true
		});
	}
} as InteractionModule<ButtonInteraction>;