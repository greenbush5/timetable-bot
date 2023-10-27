import { InteractionModule } from '@interfaces';
import { MessageActionRow, Modal, TextInputComponent, SelectMenuInteraction } from 'discord.js';

export default {
	async execute({ client, interaction }) {
		const selectedSubject = interaction.values[0];
		// Сохраните selectedSubject в контексте взаимодействия
		client.selectedSubject = selectedSubject;
		
		const modal = new Modal()
			.setCustomId('resikMod')
			.setTitle('Добавить/изменить информацию:');

		const informationInput = new TextInputComponent()
			.setCustomId('resikId')
			.setLabel('Введите информацию об выбранном пункте')
			.setStyle('PARAGRAPH');
		
		const firstActionRow = new MessageActionRow<TextInputComponent>()
			.addComponents(informationInput);
		
		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	}
} as InteractionModule<SelectMenuInteraction>;