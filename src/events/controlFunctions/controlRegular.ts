import { MessageEmbed, MessageButton, MessageActionRow } from 'discord.js';

import ExtendedClient from 'src/ExtendedClient';
import config from '@config';

export default async function(client: ExtendedClient) {
	const channel = await client.channels.fetch(config.prepodId);
	
	if (!channel) {
		console.error('[controlRegular] failed to fetch channel');
		return;
	}
	
	if (!channel.isText()) {
		console.error('[controlRegular] channel is not text-based');
		return;
	}
	
	const notifyGroupBtn = new MessageButton()
		.setCustomId('yvedomlp')
		.setLabel('Уведомить группу')
		.setStyle('SUCCESS');
	
	const myTimetableBtn = new MessageButton()
		.setCustomId('prepraspis')
		.setLabel('МОЁ РАСПИСАНИЕ')
		.setStyle('SUCCESS');
	
	const row = new MessageActionRow()
		.addComponents(myTimetableBtn, notifyGroupBtn);
	
	const embed = new MessageEmbed()
		.setTitle('ВЫБЕРИТЕ ДЕЙСТВИЕ:')
		.setDescription('')
		.setColor('#B82923');

    await channel.send({
		embeds: [embed],
		components: [row]
	});
}