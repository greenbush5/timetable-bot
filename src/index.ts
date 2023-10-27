import { Intents } from 'discord.js';
import { readdirSync } from 'fs';
import { Event } from '@interfaces';

import ExtendedClient from './ExtendedClient';
import secrets from '@secrets';
import mongoose from 'mongoose';
import path from 'path';

const client = new ExtendedClient({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.MESSAGE_CONTENT
	]
});

async function loadEvents(client: ExtendedClient) {
	const eventFiles = readdirSync(
		path.resolve(__dirname, 'events')
	).filter(file => file.endsWith('.ts') || file.endsWith('.js'));
	
	for (const file of eventFiles) {
		const event: Event = (await import(path.resolve(__dirname, 'events', file))).default;
		
		if (event.once) {
			client.once(event.name, (...args) => event.execute(client, ...args));
		} else {
			client.on(event.name, (...args) => event.execute(client, ...args));
		}
	}
}

async function main() {
	await loadEvents(client);

	try {
		await mongoose.connect(secrets.databaseUrl)
		console.log('MongoDB запущен')
	} catch (err) {
		console.error('MongoDB ошибка:', err)
	}

	client.login(secrets.token);
}

main();