const {
	Collection,
	REST,
	Routes,
	Client: BaseClient
} = require('discord.js');

const fs = require('fs');
const path = require('path');

const SOURCE_FILE_EXTENSION = 'js';

class Client extends BaseClient {
	constructor(config, options) {
		super(options);
		
		this.commands = new Collection(); // Collection<string (command name), Command>
		this.events = new Collection(); // Collection<string (event name), Event>
		this.cooldowns = new Collection(); // Collection<string (user id), Collection<string (command name)>>
		this.config = config;
	}
	
	async init() {
		console.log('Initializing...');
		
		if (!('token' in this.config)) {
			throw new Error('`token` field is missing from config file');
		}
		
		console.log('Loading commands...');
		this.loadCommands();
		
		console.log('Loading events...');
		this.loadEvents();
		
		console.log('Logging in...');
		await this.login(this.config.token);
		
		console.log('Registering commands...');
		await this.registerCommands();
	}
	
	loadCommands() {
		const commandsPath = path.join(__dirname, 'commands');
		const commands = fs.readdirSync(commandsPath).filter(file => file.endsWith('.' + SOURCE_FILE_EXTENSION));
		
		for (const fileName of commands) {
			const command = require(`${commandsPath}/${fileName}`);
			
			if (!('data' in command)) {
				throw new Error(`Command ${fileName} is missing \`data\` field`);
			}
			
			if (!('name' in command.data)) {
				throw new Error(`Command ${fileName} is missing a name`);
			}
			
			this.commands.set(command.data.name, command);
		}
	}
	
	loadEvents() {
		const eventsPath = path.join(__dirname, 'events');
		const events = fs.readdirSync(eventsPath).filter(file => file.endsWith('.' + SOURCE_FILE_EXTENSION));
		
		for (const fileName of events) {
			const event = require(`${eventsPath}/${fileName}`);
			
			this.events.set(event.name, event);
			this.on(event.name, event.execute.bind(null, this));
		}
	}
	
	async registerCommands() {
		const rest = new REST().setToken(this.config.token);
		const commandsData = Array.from(this.commands.values());
		
		await rest.put(
			Routes.applicationCommands(this.application.id),
			{ body: commandsData.map(command => command.data) }
			);
		}
	}
	
	module.exports = Client;