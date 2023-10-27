import { Event } from '@interfaces';
import ExtendedClient from 'src/ExtendedClient';

import { controlAdmin, controlPrepod, controlGlav, controlRedak, controlRegular } from './controlFunctions';

export default {
	name: 'ready',
	once: true,
	
	async execute(client: ExtendedClient) {
		console.log(`ЮХХХУ СВИСТАТЬ ВСЕХ НА ВЕРХ <3 ||Я реально работаю(наверное)!`);

		// await controlAdmin(client);
		// await controlPrepod(client);
		// await controlGlav(client);
		// await controlRedak(client);
		// await controlRegular(client);
		
		client.user!.setActivity('Стою на защите ваших оценок');
	}
} as Event;