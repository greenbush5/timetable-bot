import { InteractionModule } from '@interfaces';
import { MessageActionRow, Modal, TextInputComponent, ButtonInteraction } from 'discord.js';

export default {
	async execute({ interaction }) {
		const modal = new Modal()
			.setCustomId('PrepodMod')
			.setTitle('Добавление');
		
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('PrepodName')
			.setLabel('Введите ФИО в формате: Иванов И. И.')
			.setStyle('SHORT');
		
		const ColorInput = new TextInputComponent()
			.setCustomId('PrepodId')
			.setLabel('Введите Discord ID преподавателя')
			.setStyle('SHORT');
		
		const firstActionRow = new MessageActionRow<TextInputComponent>().addComponents(favoriteColorInput);
		const secondActionRow = new MessageActionRow<TextInputComponent>().addComponents(ColorInput);
		
		modal.addComponents(firstActionRow, secondActionRow); // Добавляем обе строки в модалку
		await interaction.showModal(modal);
	}
} as InteractionModule<ButtonInteraction>;