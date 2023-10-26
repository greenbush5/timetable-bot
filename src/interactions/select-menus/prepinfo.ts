import { InteractionModule } from 'src/interfaces';
import { MessageActionRow, Modal, TextInputComponent, SelectMenuInteraction } from 'discord.js';

export default {
	async execute({ client, interaction }) {
		const selectedSubject = interaction.values[0];
		// Сохраните selectedSubject в контексте взаимодействия
		client.selectedSubject = selectedSubject;
		
		const modal = new Modal()
			.setCustomId('prepinfoMod')
			.setTitle(`Уведомить ${selectedSubject}:`);

		const favoriteColorInput = new TextInputComponent()
			.setCustomId('prepinfoId')
			.setLabel("Введите уведомление преподавателя")
			.setStyle('PARAGRAPH');

		const firstActionRow = new MessageActionRow<TextInputComponent>()
			.addComponents(favoriteColorInput);

		modal.addComponents(firstActionRow);
		await interaction.showModal(modal);
	}
} as InteractionModule<SelectMenuInteraction>;