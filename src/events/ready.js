module.exports = {
	name: 'ready',
	once: true,
	
	execute(client) {
		console.log(`ЮХХХУ СВИСТАТЬ ВСЕХ НА ВЕРХ <3 ||Я реально работаю(наверное)!`);
		// sendControlADM()
		// sendControlPREPOD()
		// sendControlGLAV()
		// sendControlREDACK()
		// sendControl()
		client.user.setActivity(activityText, { type: 'PLAYING' });
	}
};