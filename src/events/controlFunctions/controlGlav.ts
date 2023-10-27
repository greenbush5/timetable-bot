import { MessageEmbed, MessageButton, MessageActionRow } from 'discord.js';

import ExtendedClient from 'src/ExtendedClient';
import config from '@config';

export default async function(client: ExtendedClient) {
	const channel = await client.channels.fetch(config.glavId);

	if (!channel) {
		console.error('[controlGlav] failed to fetch channel');
		return;
	}

	if (!channel.isText()) {
		console.error('[controlGlav] channel is not text-based');
		return;
	}

	const timetableBtn = new MessageButton()
        .setCustomId('raspis')
        .setLabel('РАСПИСАНИЕ')
        .setStyle('SUCCESS');
        
    const timetableTeacherBtn = new MessageButton()
        .setCustomId('raspisPREP')
        .setLabel('РАСПИСАНИЕ ПРЕП.')
        .setStyle('SUCCESS');

    const planBtn = new MessageButton()
        .setCustomId('plan')
        .setLabel('УЧЕБНЫЙ ПЛАН')
        .setStyle('SUCCESS');

    const workScheduleBtn = new MessageButton()
        .setCustomId('resim')
        .setLabel('РЕЖИМ РАБОТЫ')
        .setStyle('PRIMARY');

    const applicationBtn = new MessageButton()
        .setCustomId('podati')
        .setLabel('ПОДАТЬ ЗАЯВЛЕНИЕ')
        .setStyle('PRIMARY');

    const downloadApplicationBtn = new MessageButton()
        .setCustomId('ska4')
        .setLabel('СКАЧАТЬ ЗАЯВЛЕНИЕ')
        .setStyle('PRIMARY');

    const myTimetableBtn = new MessageButton()
        .setCustomId('mayraspis')
        .setLabel('МОЁ РАСПИСАНИЕ')
        .setStyle('DANGER');
  
    const row1 = new MessageActionRow()
        .addComponents(timetableBtn, timetableTeacherBtn, planBtn);
    
    const row2 = new MessageActionRow()
        .addComponents(workScheduleBtn, applicationBtn, downloadApplicationBtn);
    
    const row3 = new MessageActionRow()
        .addComponents(myTimetableBtn);
  
    const embed = new MessageEmbed()
        .setTitle('ВЫБЕРИТЕ ДЕЙСТВТЕ:')
        .setDescription('Нажми на **МОЁ РАСПИСАНИЕ** Что бы получить ваше расписание пар.\nНажми на **РАСПИСАНИЕ** Что бы получить расписание пар любой группы.\nНажмите **РАСПИСАНИЕ ПРЕП.** Что быузнать расписание преподавателя.\nНажмите **УЧЕБНЫЙ ПЛАН** Что бы узнать учебный план для нужной вам специальности.\nНажмите на **РЕЖИМ РАБОТЫ** Что бы узнать расписание и контактную информацию административных отделений (бухгалтерия, кафедра, медпункт и тд.).\nНажимите **ПОДАТЬ ЗАЯВЛЕНИЕ** Что бы получить информацию о падаче заявлений, получении справок перевыпуск пропусков и т.д..\nНажмите **СКАЧАТЬ ЗАЯВЛЕНИЕ** Что бы получть форму заявлений или пояснительныйх записок:')
        .setColor('#DE5EB4');
  
    await channel.send({
		embeds: [embed],
		components: [row1, row2, row3]
	});
}