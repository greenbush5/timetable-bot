module.exports = {
	data: {
		name: 'ping',
		description: 'This is a test command'
	},
	
	cooldown: 1,
	
	async execute({ interaction }) {
		interaction.reply('Pong!');
	}
};