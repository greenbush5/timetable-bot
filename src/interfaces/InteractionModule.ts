import { ButtonInteraction, SelectMenuInteraction, ModalSubmitInteraction } from 'discord.js';
import ExtendedClient from 'src/ExtendedClient';

export type InteractionModule<T extends ButtonInteraction | SelectMenuInteraction | ModalSubmitInteraction> = {
	execute: (args: {
		client: ExtendedClient
		interaction: T
	}) => void
};