import { Event } from '@interfaces';
import chalk from 'chalk';

export const event: Event = {
	name: 'ready',
	once: true,

	execute: () => {
		console.log(chalk.yellowBright('Ready!'));
	}
};