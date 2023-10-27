import { Interaction, ButtonInteraction, SelectMenuInteraction, ModalSubmitInteraction } from 'discord.js';
import { Event, InteractionModule } from '@interfaces';

import ExtendedClient from 'src/ExtendedClient';
import path from 'path';

const formatPath = (category: 'buttons' | 'modal-submit' | 'select-menus', fileName: string) =>
	path.resolve(__dirname, '..', 'interactions', category, fileName);

export default {
	name: 'interactionCreate',
	once: false,
	
	async execute(client: ExtendedClient, interaction: Interaction) {
		const isButton = interaction.isButton();
		const isSelectMenu = interaction.isSelectMenu();
		const isModalSubmit = interaction.isModalSubmit();

		if (!isButton && !isSelectMenu && !isModalSubmit) return;

		const { customId } = interaction;
		
		if (isButton) {
			try {
				const modulePath = formatPath('buttons', customId);
				const button: InteractionModule<ButtonInteraction> = (await import(modulePath)).default;

				button.execute({ client, interaction });
			} catch (error) {
				console.error(error);

				await interaction.reply({
					content: 'Произошла ошибка при выполнении кнопки.',
					ephemeral: true
				});
			}
		} else if (isSelectMenu) {
			try {
				const modulePath = formatPath('select-menus', customId);
				const selectMenu: InteractionModule<SelectMenuInteraction> = (await import(modulePath)).default;
				
				selectMenu.execute({ client, interaction });
			} catch (error) {
				console.error(error);

				await interaction.reply({
					content: 'Произошла ошибка при выполнении селект-меню.',
					ephemeral: true
				});
			}
		} else if (isModalSubmit) {
			try {
				const modulePath = formatPath('modal-submit', customId);
				const modalSubmit: InteractionModule<ModalSubmitInteraction> = (await import(modulePath)).default;
				
				modalSubmit.execute({ client, interaction });
			} catch (error) {
				console.error(error);

				await interaction.reply({
					content: 'Произошла ошибка при выполнении модального окна.',
					ephemeral: true
				});
			}
		}
	}
} as Event;