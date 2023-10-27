import { InteractionModule } from '@interfaces';
import { MessageActionRow, Modal, TextInputComponent, SelectMenuInteraction } from 'discord.js';

export default {
	async execute({ client, interaction }) {
		const selectedSubject = interaction.values[0];
		// Сохраните selectedSubject в контексте взаимодействия
		client.selectedSubject = selectedSubject;
		
		const modal = new Modal()
			.setCustomId('HitMod')
			.setTitle('Добавить/изменить план:');

		const planInfoInput = new TextInputComponent()
			.setCustomId('HitId')
			.setLabel('Введите информацию об учебном плане')
			.setStyle('PARAGRAPH');

		const firstActionRow = new MessageActionRow<TextInputComponent>()
			.addComponents(planInfoInput);

		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	}
} as InteractionModule<SelectMenuInteraction>;