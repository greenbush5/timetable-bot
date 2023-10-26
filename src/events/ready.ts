import { Event } from '../interfaces';
import ExtendedClient from 'src/ExtendedClient';

export default {
	name: 'ready',
	once: true,
	
	execute(client: ExtendedClient) {
		console.log(`ЮХХХУ СВИСТАТЬ ВСЕХ НА ВЕРХ <3 ||Я реально работаю(наверное)!`);

		// sendControlADM()
		// sendControlPREPOD()
		// sendControlGLAV()
		// sendControlREDACK()
		// sendControl()

		// TODO: я хз что тут должно быть
		client.user!.setActivity('хз');
	}
} as Event;