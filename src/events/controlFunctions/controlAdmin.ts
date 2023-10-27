import { MessageEmbed, MessageButton, MessageActionRow } from 'discord.js';

import ExtendedClient from 'src/ExtendedClient';
import config from '@config';

export default async function(client: ExtendedClient) {
	const channel = await client.channels.fetch(config.adminId);

	if (!channel) {
		console.error('[controlAdmin] failed to fetch channel');
		return;
	}

	if (!channel.isText()) {
		console.error('[controlAdmin] channel is not text-based');
		return;
	}

	const mes = new MessageEmbed()
		.setTitle('ВЫБЕРИТЕ ДЕЙСТВИЕ:')
		.setDescription('**Добавить Преподователя** - данная кнопка позволяет добавить нового преподавателя\n**Добавить Редактора** - данная кнопка позволяет добавить редактора - человека, управляющего расписанием')
		.setColor('#B82923');

	const ip = new MessageButton()
        .setCustomId('prepod')
        .setLabel('Добавить Преподователя')
        .setStyle('SUCCESS');

    const cont = new MessageButton()
        .setCustomId('redak')
        .setLabel('Добавить Редактора')
        .setStyle('SUCCESS');

    const com = new MessageActionRow()
    	.addComponents(ip, cont);
	
	await channel.send({
		embeds: [mes],
		components: [com]
	});
}