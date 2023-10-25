// Это пример формата файла `config.ts`

import { Config } from '@interfaces';

// Конфиг создан отдельно перед экспортом для тайп-чекинга
const config: Config = {
	token: '<DISCORD TOKEN HERE>',
	databaseUrl: '<DATABASE URL HERE>'
};

export default config;