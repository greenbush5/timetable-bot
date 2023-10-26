import { Interaction, ButtonInteraction, SelectMenuInteraction, ModalSubmitInteraction } from 'discord.js';
import { Event, InteractionModule } from '../interfaces';

import ExtendedClient from 'src/ExtendedClient';

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
				const button: InteractionModule<ButtonInteraction> = await import(`../../interactions/buttons/${customId}`);
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
				const selectMenu: InteractionModule<SelectMenuInteraction> = await import(`../../interactions/select-menus/${customId}`);
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
				const modalSubmit: InteractionModule<ModalSubmitInteraction> = await import(`../../interactions/modal-submit/${customId}`);
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