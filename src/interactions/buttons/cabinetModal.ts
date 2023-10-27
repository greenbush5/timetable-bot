import { InteractionModule } from '@interfaces';
import { MessageActionRow, Modal, TextInputComponent, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const modal = new Modal()
			.setCustomId('cabinetMod')
			.setTitle(`Добавить кабинет:`);
		
		const classNumberInput = new TextInputComponent()
			.setCustomId('cabinetId')
			.setLabel("Введите номер кабинета")
			.setStyle('SHORT');
		
		const row = new MessageActionRow<TextInputComponent>()
			.addComponents(classNumberInput);

		modal.addComponents(row);
		
		await interaction.showModal(modal);
	}
} as InteractionModule<ButtonInteraction>;