import { InteractionModule } from '@interfaces';
import { MessageActionRow, Modal, TextInputComponent, SelectMenuInteraction } from 'discord.js';

export default {
	async execute({ client, interaction }) {
		const selectedSubject = interaction.values[0];
		// Сохраните selectedSubject в контексте взаимодействия
		client.selectedSubject = selectedSubject;
		
		const modal = new Modal()
			.setCustomId('yvedMod')
			.setTitle(`Уведомить группу ${selectedSubject}:`);

		const groupNotificationInput = new TextInputComponent()
			.setCustomId('yvedId')
			.setLabel('Введите уведомление для группы')
			.setStyle('PARAGRAPH');

		const actionRow = new MessageActionRow<TextInputComponent>()
			.addComponents(groupNotificationInput);

		modal.addComponents(actionRow);
		await interaction.showModal(modal);
	}
} as InteractionModule<SelectMenuInteraction>;