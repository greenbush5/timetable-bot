import { IntentsBitField as I } from 'discord.js';
import { ExtendedClient } from '@client';
import config from './config';

import mongoose from 'mongoose';
import chalk from 'chalk';

async function main() {
	console.log(chalk.greenBright('Connecting to database...'));
	const connection = await mongoose.connect(config.databaseUrl);

	const client = new ExtendedClient(config, connection, {
		intents: [
			I.Flags.GuildMembers,
			I.Flags.MessageContent,
			I.Flags.DirectMessages,
			I.Flags.Guilds
		]
	});

	await client.initialize();
}

main();