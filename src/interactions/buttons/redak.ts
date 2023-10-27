import { InteractionModule } from '@interfaces';
import { MessageActionRow, Modal, TextInputComponent, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const modal = new Modal()
			.setCustomId('redakMod')
			.setTitle('Добавление');
		
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('redakName')
			.setLabel('Введите ФИО в формате: Иванов И. И.')
			.setStyle('SHORT');
		
		const ColorInput = new TextInputComponent()
			.setCustomId('redakId')
			.setLabel('Введите Discord ID редактора')
			.setStyle('SHORT');
		
		const firstActionRow = new MessageActionRow<TextInputComponent>().addComponents(favoriteColorInput);
		const secondActionRow = new MessageActionRow<TextInputComponent>().addComponents(ColorInput);
		
		modal.addComponents(firstActionRow, secondActionRow); // Добавляем обе строки в модалку
		await interaction.showModal(modal);
	}
} as InteractionModule<ButtonInteraction>;