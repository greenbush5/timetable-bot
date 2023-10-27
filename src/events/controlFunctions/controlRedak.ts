import { MessageEmbed, MessageButton, MessageActionRow } from 'discord.js';

import ExtendedClient from 'src/ExtendedClient';
import config from '@config';

export default async function(client: ExtendedClient) {
	const channel = await client.channels.fetch(config.redakId);
	
	if (!channel) {
		console.error('[controlRedak] failed to fetch channel');
		return;
	}
	
	if (!channel.isText()) {
		console.error('[controlRedak] channel is not text-based');
		return;
	}
	
	const addTimetableBtn = new MessageButton()
		.setCustomId('dobras')
		.setLabel('ДОБАВИТЬ РАСПИСАНИЕ')
		.setStyle('SUCCESS');
	
	const notifsBtn = new MessageButton()
		.setCustomId('yvedomly')
		.setLabel('УВЕДОМЛЕНИЕ')
		.setStyle('SUCCESS');
	
	const notifsTeachersBtn = new MessageButton()
		.setCustomId('prepyvedomly')
		.setLabel('УВЕДОМЛЕНИЕ ПРЕП.')
		.setStyle('SUCCESS');
	
	const planBtn = new MessageButton()
		.setCustomId('plank')
		.setLabel('УЧЕБНЫЙ ПЛАН')
		.setStyle('SUCCESS');
	
	const workScheduleBtn = new MessageButton()
		.setCustomId('reshim')
		.setLabel('РЕЖИМ РАБОТЫ')
		.setStyle('SUCCESS');
	
	const sendApplicationBtn = new MessageButton()
		.setCustomId('poddav')
		.setLabel('ПОДАЧА ЗАЯВЛЕНИЙ')
		.setStyle('SUCCESS');
	
	const downloadApplicationBtn = new MessageButton()
		.setCustomId('skasred')
		.setLabel('СКАЧАТЬ ЗАЯВЛЕНИЕ')
		.setStyle('SUCCESS');
	
	const row1 = new MessageActionRow()
		.addComponents(addTimetableBtn, notifsBtn, notifsTeachersBtn);
	
	const row2 = new MessageActionRow()
		.addComponents(planBtn, workScheduleBtn, sendApplicationBtn, downloadApplicationBtn);
	
	const embed = new MessageEmbed()
		.setTitle('ВЫБЕРИТЕ ДЕЙСТВТЕ:')
		.setDescription('Нажмите **ДОБАВИТЬ РАСПИСАНИЕ** что бы добавить расписание.\nНажмите **УВЕДОМЛЕНИЕ** что бы прислать изменение расписания/оправить ведомление.\nНажмите **УЧЕБНЫЙ ПЛАН** что отредактировать/добавить учебный план')
		.setColor('#DE5EB4');
	
	await channel.send({
		embeds: [embed],
		components: [row1, row2]
	});
}