const { Client } = require('discord.js');

const client = new Client({
	intents: [
		Discord.Intents.FLAGS.GUILDS,
		Discord.Intents.FLAGS.GUILD_MESSAGES,
		Discord.Intents.FLAGS.MESSAGE_CONTENT,
	]
});

function loadEvents(client) {
	const eventFiles = readdirSync('./src/event/events').filter(file => file.endsWith('.js'));
	
	for (const file of eventFiles) {
		const event = require(`./events/${file}`);
		
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args, client));
		} else {
			client.on(event.name, (...args) => event.execute(...args, client));
		}
	}
}

loadEvents(client);

mongoose.connect('mongodb+srv://g92836142:l9oRe3To4DHKjUSF@cluster0.k2u2e3g.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
	.then(() => console.log('MongoDB запущен'))
	.catch(err => console.error('MongoDB ошибка:', err));

const { token } = require('./secrets');
client.login(token);