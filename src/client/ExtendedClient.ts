import { Client, Collection, ClientOptions } from 'discord.js';
import { Config, Event, EventModule } from '@interfaces';

import { readdirSync } from 'fs';
import { SingleBar } from 'cli-progress';

import mongoose from 'mongoose';
import chalk from 'chalk';
import path from 'path';

const FileExtension = path.basename(__filename).endsWith('.ts') ? '.ts' : '.js';

export class ExtendedClient extends Client {
	protected events: Collection<string, Event>;

	constructor(
		public readonly config: Config,
		private database: typeof mongoose,
		options: ClientOptions
	) {
		super(options);
		this.events = new Collection();
	}

	public async initialize() {
		/// Инициализация ивентов
		// Чтение файлов ивентов из папки
		const eventPath = path.join(__dirname, '..', 'events');
		const events = readdirSync(eventPath).filter(file => file.endsWith(FileExtension));

		// Создание прогресс-бара
		const eventBar = new SingleBar({
			format: chalk.greenBright('Registering events... ') + '|' + chalk.cyan('{bar}') + '|' + chalk.green(' {percentage}%') + ' || ' + chalk.yellowBright('({value}/{total} Events)'),
			barCompleteChar: '\u2588',
			barIncompleteChar: '\u2591',
			hideCursor: true
		});

		eventBar.start(events.length, 0);

		for (const file of events) {
			// Импорт файла ивента
			const { event }: EventModule = await import(`${eventPath}/${file}`);

			this.events.set(event.name, event);

			// Байнд ивента зависит от поля `once` на нём
			if (!event.once) {
				this.on(event.name, event.execute.bind(null, this));
			} else {
				this.once(event.name, event.execute.bind(null, this));
			}

			eventBar.increment();
		}

		eventBar.stop();

		/// Авторизация в дискорд API
		this.login(this.config.token);
	}
}