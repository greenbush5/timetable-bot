import { ExtendedClient } from '@client';
import { ClientEvents } from 'discord.js';

export type Event = {
	name: keyof ClientEvents
	once: boolean

	execute: (client: ExtendedClient, ...args: any[]) => void
};

export type EventModule = {
	event: Event
};