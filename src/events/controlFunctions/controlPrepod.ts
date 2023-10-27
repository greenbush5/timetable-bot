import { MessageEmbed, MessageButton, MessageActionRow } from 'discord.js';

import ExtendedClient from 'src/ExtendedClient';
import config from '@config';

export default async function(client: ExtendedClient) {
	const channel = await client.channels.fetch(config.groupId);
	
	if (!channel) {
		console.error('[controlPrepod] failed to fetch channel');
		return;
	}

	if (!channel.isText()) {
		console.error('[controlPrepod] channel is not text-based');
		return;
	}

	const mes = new MessageEmbed()
		.setTitle('ВЫБЕРИТЕ ДЕЙСТВИЕ:')
		.setDescription('**Создать группу** - эта кнопка создаст группу класса')
		.setColor('#2710D1');
	
	const ip = new MessageButton()
		.setCustomId('create')
		.setLabel('Создать группу')
		.setStyle('SUCCESS');
	
	const com = new MessageActionRow()
		.addComponents(ip);
	
	await channel.send({
		embeds: [mes],
		components: [com]
	});
}