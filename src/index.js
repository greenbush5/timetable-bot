const { GatewayIntentBits: I } = require('discord.js');

const Client = require('./client');
const config = require('./config.json');

const client = new Client(config, {
	intents: [
		I.MessageContent,
		I.DirectMessages,
		I.GuildMembers,
		I.GuildMessages,
		I.Guilds
	]
});

client.init();