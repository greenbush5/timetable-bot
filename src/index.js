const Discord = require('discord.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


const {
  MessageActionRow,
  MessageButton,
  Permissions,
  MessageEmbed,
  Modal,
  TextInputComponent,
  GatewayIntentBits,
  MessageSelectMenu  
} = require('discord.js');

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.MESSAGE_CONTENT,
  ],
  presence: {
      activities: [{
          name: "",
          type: 1
      }]
  }
});

const { token, databaseUrl } = require('./secrets');

const GUILD_ID = '1166726020481679400';
const adminID = '1166726152262537238';
const groopID = '1166759868519157821';
const glavId = `1166818230749380711`;
const redId = `1166838868033683566`;
const guild = '1166726020481679400';
const kitIDholy = '1135861027146309716';

const roleIdPrepod = '1166745752278671370';

const subjectsArray = [
  'Английский Язык',
  'Биология',
  'Бизнес-аналитика',
  'Бухгалтерский учет',
  'Веб-программирование',
  'География',
  'Доп. занятие',
  'Информатика',
  'Информационные технологии',
  'История',
  'ИСРПО',
  'Литература',
  'Математика',
  'Математическое моделирование',
  'ОБЖ',
  'ОЕЭДП',
  'Правовое обеспечение профессиональной деятельности',
  'Психология общения',
  'Русский Язык',
  'Технология разработки программного обеспечения',
  'Техническое оснащение торговых организаций и охрана труда',
  'Теория электрических цепей',
  'Физика',
  'Физическая культура',
  'Элементы высшей математики',
];

const plans = [
  '«Сетевое системное администрирование», 9 класс',
  '«Сетевое системное администрирование», 11 класс',
  '«Информационные системы и программирование»',
  '«Обеспечение информационной безопасности телекоммуникационных систем»',
  '«Обеспечение информационной безопасности автоматизированных систем»',
  '	«Инфокоммуникационные сети и системы связи»',
  '«Экономика и бухгалтерский учёт (по отраслям)»',
  '«Коммерция (по отраслям)»',
  '«Банковское дело»'
]


mongoose.connect(databaseUrl, { useNewUrlParser: true })
  .then(() => console.log('MongoDB запущен'))
  .catch(err => console.error('MongoDB ошибка:', err));

  const grypSchema = new mongoose.Schema({
    Name: {
        type: String,
      },
    RoleID: {
        type: String,
    },
    Klassyxa: {
      type: String,
    },
    Starosta: {
      type: String,
    },
    yvedomlenie: {
      type: String,
    },
    chat: {
      type: String,
    },
    texx: {
      type: String,
    },
    klassID: {
      type: String,
    },
  });
  
  const gryppa = mongoose.model('grypa', grypSchema);

  const prepodSchema = new mongoose.Schema({
    Name: {
        type: String,
      },
    Id: {
      type: String,
    },
  });
  
  const prepod = mongoose.model('prepodi', prepodSchema);

  const redakSchema = new mongoose.Schema({
    Name: {
        type: String,
      },
    Id: {
      type: String,
    },
  });
  
  const redak = mongoose.model('redakt', redakSchema);

  const stateSchema = new mongoose.Schema({
    satats: {
        type: String,
      },
    sprav: {
      type: String,
    },
    prop: {
      type: String,
    },
  });
  
  const state = mongoose.model('state', stateSchema);

  const raspSchema = new mongoose.Schema({
    groop: {
        type: String,
      },
    nomer: {
      type: String,
    },
    name: {
      type: String,
    },
    prepod: {
      type: String,
    },
    date: {
      type: String,
    },
  });
  
  const red = mongoose.model('red', raspSchema);

  const planSchema = new mongoose.Schema({
    name: {
        type: String,
      },
    info: {
      type: String,
    },
  });
  
  const plane = mongoose.model('plane', planSchema);

  client.on('ready', () => {
    console.log(`ЮХХХУ СВИСТАТЬ ВСЕХ НА ВЕРХ <3 ||Я реально работаю(наверное)!`);
    sendControlADM()
    sendControlPREPOD()
    sendControlGLAV()
    sendControlREDACK()
  });

  async function sendControlGLAV() {

    const channel = await client.channels.fetch(glavId);

    const But = new MessageButton()
        .setCustomId('raspis')
        .setLabel('РАСПИСАНИЕ')
        .setStyle('SUCCESS');
        
    const But1 = new MessageButton()
        .setCustomId('raspisPREP')
        .setLabel('РАСПИСАНИЕ ПРЕП.')
        .setStyle('SUCCESS');

    const But2 = new MessageButton()
        .setCustomId('plan')
        .setLabel('УЧЕБНЫЙ ПЛАН')
        .setStyle('SUCCESS');

    const Ton = new MessageButton()
        .setCustomId('resim')
        .setLabel('РЕЖИМ РАБОТЫ')
        .setStyle('PRIMARY');

    const Ton1 = new MessageButton()
        .setCustomId('podati')
        .setLabel('ПОДАТЬ ЗАЯВЛЕНИЕ')
        .setStyle('PRIMARY');

    const Xop = new MessageButton()
        .setCustomId('ska4')
        .setLabel('СКАЧАТЬ ЗАЯВЛЕНИЕ')
        .setStyle('DANGER');
  
    const com1 = new MessageActionRow()
        .addComponents(But, But1, But2);
    
    const com2 = new MessageActionRow()
        .addComponents(Ton, Ton1);
    
    const com3 = new MessageActionRow()
        .addComponents(Xop);
  
    const mes = new MessageEmbed()
        .setTitle('ВЫБЕРИТЕ ДЕЙСТВТЕ:')
        .setDescription('Нажми на **РАСПИСАНИЕ** Что бы получить расписание пар.\nНажмите **РАСПИСАНИЕ ПРЕП.** Что быузнать расписание преподавателя.\nНажмите **УЧЕБНЫЙ ПЛАН** Что бы узнать учебный план для нужной вам специальности.\nНажмите на **РЕЖИМ РАБОТЫ** Что бы узнать расписание и контактную информацию административных отделений (бухгалтерия, кафедра, медпункт и тд.).\nНажимите **ПОДАТЬ ЗАЯВЛЕНИЕ** Что бы получить информацию о падаче заявлений, получении справок перевыпуск пропусков и т.д..\nНажмите **СКАЧАТЬ ЗАЯВЛЕНИЕ** Что бы получть форму заявлений или пояснительныйх записок:')
        .setColor('#DE5EB4');
  
     // const message = await channel.send({ embeds: [mes], components: [com1, com2, com3] });

    client.on('interactionCreate', async (interaction) => {
      if (!interaction.isButton()) return;
  
    });


  }

  async function sendControlREDACK() {
    const channel = await client.channels.fetch(redId);
  
    const But = new MessageButton()
      .setCustomId('dobras')
      .setLabel('ДОБАВИТЬ РАСПИСАНИЕ')
      .setStyle('SUCCESS');
  
    const But1 = new MessageButton()
      .setCustomId('editras')
      .setLabel('ИЗМЕНИТЬ РАСПИСАНИЕ')
      .setStyle('SUCCESS');
  
    const But2 = new MessageButton()
      .setCustomId('yvedomly')
      .setLabel('УВЕДОМЛЕНИЕ')
      .setStyle('SUCCESS');

    const But3 = new MessageButton()
      .setCustomId('plank')
      .setLabel('УЧЕБНЫЙ ПЛАН')
      .setStyle('SUCCESS');
  
    const com1 = new MessageActionRow()
      .addComponents(But, But1, But2, But3);
  
    const mes = new MessageEmbed()
      .setTitle('ВЫБЕРИТЕ ДЕЙСТВТЕ:')
      .setDescription('')
      .setColor('#DE5EB4');

    // const message = await channel.send({ embeds: [mes], components: [com1] });

  
      // client.on('interactionCreate', async (interaction) => { //добавть расписание
      //   if (!interaction.isButton()) return;
      
      //   if (interaction.customId === 'dobras') {
      //     const grypy = await gryppa.find({}, 'Name');
      //     const prepodi = await prepod.find({}, 'Name');
      
      //     const grypaOptions = grypy.map((grypa) => ({
      //       label: grypa.Name,
      //       value: grypa.Name,
      //     }));
      
      //     const prepodOptions = prepodi.map((prepod) => ({
      //       label: prepod.Name,
      //       value: prepod.Name,
      //     }));
      
      //     const numberOptions = Array.from({ length: 7 }, (_, i) => ({
      //       label: `${i + 1}`,
      //       value: `${i + 1}`,
      //     }));
      
      //     const subjectsOptions = subjectsArray.map((subject) => ({
      //       label: subject,
      //       value: subject.replace(/ /g, '_').toLowerCase(),
      //     }));
      
      //     const dateOptions = getFutureDates(7).map((date) => ({
      //       label: date,
      //       value: date,
      //     }));
      
      //     const grypaRow = new MessageActionRow().addComponents(
      //       new MessageSelectMenu()
      //         .setCustomId('classADD')
      //         .setPlaceholder('ГРУППА')
      //         .addOptions(grypaOptions),
      //     );
      
      //     const numberRow = new MessageActionRow().addComponents(
      //       new MessageSelectMenu()
      //         .setCustomId('numberADD')
      //         .setPlaceholder('НОМЕР ПАРЫ')
      //         .addOptions(numberOptions),
      //     );
      
      //     const subjectsRow = new MessageActionRow().addComponents(
      //       new MessageSelectMenu()
      //         .setCustomId('subjectADD')
      //         .setPlaceholder('ПРЕДМЕТ')
      //         .addOptions(subjectsOptions),
      //     );
      
      //     const prepodRow = new MessageActionRow().addComponents(
      //       new MessageSelectMenu()
      //         .setCustomId('prepodADD')
      //         .setPlaceholder('ПРЕПОДАВАТЕЛЬ')
      //         .addOptions(prepodOptions),
      //     );
      
      //     const dateRow = new MessageActionRow().addComponents(
      //       new MessageSelectMenu()
      //         .setCustomId('dateADD')
      //         .setPlaceholder('ДАТА')
      //         .addOptions(dateOptions),
      //     );
      
      //     await interaction.reply({
      //       content: 'Выберите группу, номер пары, предмет, преподавателя и дату:',
      //       components: [grypaRow, numberRow, dateRow, subjectsRow, prepodRow],
      //       ephemeral: true
      //     });
      //   } 
      // })      
      
      // client.on('interactionCreate', async (interaction) => { //добавть расписание обработка ответоа
      //   if (!interaction.isSelectMenu()) return;
      
      //   const user = interaction.user;
      
      //   if (interaction.customId === 'classADD') {
      //     const selectedGroup = interaction.values[0];
      //     console.log(`Выбрана группа: ${selectedGroup}`);
      //     user.tempData = { groop: selectedGroup };
      
      //     await interaction.reply({ content: `Выбрана группа: ${selectedGroup}`, ephemeral: true });
      //   } else if (interaction.customId === 'numberADD') {
      //     const selectedNumber = interaction.values[0];
      //     console.log(`Выбран номер пары: ${selectedNumber}`);
      //     user.tempData.nomer = selectedNumber;
      
      //     await interaction.reply({ content: `Выбран номер пары: ${selectedNumber}`, ephemeral: true });
      //   } else if (interaction.customId === 'subjectADD') {
      //     const selectedSubject = interaction.values[0];
      //     console.log(`Выбран предмет: ${selectedSubject}`);
      //     user.tempData.name = selectedSubject;
      
      //     await interaction.reply({ content: `Выбран предмет: ${selectedSubject}`, ephemeral: true });
      //   } else if (interaction.customId === 'prepodADD') {
      //     const selectedPrepod = interaction.values[0];
      //     console.log(`Выбран преподаватель: ${selectedPrepod}`);
      //     user.tempData.prepod = selectedPrepod;
      
      //     await interaction.reply({ content: `Выбран преподаватель: ${selectedPrepod}`, ephemeral: true });
      //   } else if (interaction.customId === 'dateADD') {
      //     const selectedDate = interaction.values[0];
      //     console.log(`Выбрана дата: ${selectedDate}`);
      //     user.tempData.date = selectedDate;
      
      //     const existingRed = await red.findOne({
      //       groop: user.tempData.groop,
      //       nomer: user.tempData.nomer,
      //       name: user.tempData.name,
      //       prepod: user.tempData.prepod,
      //       date: user.tempData.date,
      //     });
      
      //     if (existingRed) {
      //     } else {
      //       const newRed = new red({
      //         groop: user.tempData.groop,
      //         nomer: user.tempData.nomer,
      //         name: user.tempData.name,
      //         prepod: user.tempData.prepod,
      //         date: user.tempData.date,
      //       });
      //       await newRed.save();
      //     }
      
      //     await interaction.reply({ content: `Выбрана дата: ${selectedDate}`, ephemeral: true });
      //   }
      // });

      client.on('interactionCreate', async (interaction) => { //учебный план
        if (!interaction.isButton()) return;
      
        if (interaction.customId === 'plank') {
      
          const plansOptions = plans.map((subject) => ({
            label: subject,
            value: subject.replace(/ /g, '_').toLowerCase(),
          }));
      
          const subjectsRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('subjectADD')
              .setPlaceholder('ПРЕДМЕТ')
              .addOptions(plansOptions),
          );
      
          await interaction.reply({
            content: 'Выберите желаемый план:',
            components: [subjectsRow],
            ephemeral: true
          });
        } 
      })

      client.on('interactionCreate', async (interaction) => {
        if (interaction.customId === 'subjectADD') {
          const selectedSubject = interaction.values[0];
      
          // Сохраните selectedSubject в контексте взаимодействия
          interaction.client.selectedSubject = selectedSubject;
      
          const modal = new Modal()
            .setCustomId('HitMod')
            .setTitle(`Добавить/изменить план:`);
          const favoriteColorInput = new TextInputComponent()
            .setCustomId('HitId')
            .setLabel("Введите информацию об учебном плане")
            .setStyle('PARAGRAPH');
          const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
          modal.addComponents(firstActionRow);
          await interaction.showModal(modal);
        }
      });
      
      client.on('interactionCreate', async (interaction) => {
        if (!interaction.isModalSubmit()) return;
      
        if (interaction.customId === 'HitMod') {
          const info = interaction.fields.getTextInputValue('HitId');
          const selectedSubject = interaction.client.selectedSubject; // Получите selectedSubject из контекста взаимодействия
      
          const existingPlan = await plane.findOne({ name: selectedSubject });
      
          if (existingPlan) {
            existingPlan.info = info;
            await existingPlan.save();
            await interaction.update('Успешно сохранено');
          } else {
            const newPlan = new plane({
              name: selectedSubject,
              info: info,
            });
            await newPlan.save();
            await interaction.update('Успешно сохранено');
          }
        }
      });
  }

  async function sendControlADM() {
   // const channel = await client.channels.fetch(channelAKK);
    const control = await client.channels.fetch(adminID);

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

    const mes = new MessageEmbed()
        .setTitle('ВЫБЕРИТЕ ДЕЙСТВИЕ:')
        .setDescription('**Добавить Преподователя** - данная кнопка позваляет добавить нового преподавателя\n**Добавить Редактора** - данная роль позволяет управлять расписанием')
        .setColor('#B82923');

      // const message = await control.send({ embeds: [mes], components: [com] });

    client.on('interactionCreate', async (interaction) => {

      if (!interaction.isButton()) return;
      const userId = interaction.user.id;
      
      if (interaction.customId === 'prepod') {
        const modal = new Modal()
          .setCustomId('PrepodMod')
          .setTitle('Добавление');
      
        const favoriteColorInput = new TextInputComponent()
          .setCustomId('PrepodName')
          .setLabel("Введите ФИО в формате: Иванов И. И.")
          .setStyle('SHORT');
      
        const ColorInput = new TextInputComponent()
          .setCustomId('PrepodId')
          .setLabel("Введите Discord ID преподавателя")
          .setStyle('SHORT');
      
        const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
        const secondActionRow = new MessageActionRow().addComponents(ColorInput);
      
        modal.addComponents(firstActionRow, secondActionRow); // Добавляем обе строки в модалку
        await interaction.showModal(modal);
      }

      if (interaction.customId === 'redak') {
        const modal = new Modal()
          .setCustomId('redakMod')
          .setTitle('Добавление');
      
        const favoriteColorInput = new TextInputComponent()
          .setCustomId('redakName')
          .setLabel("Введите ФИО в формате: Иванов И. И.")
          .setStyle('SHORT');
      
        const ColorInput = new TextInputComponent()
          .setCustomId('redakId')
          .setLabel("Введите Discord ID редактора")
          .setStyle('SHORT');
      
        const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
        const secondActionRow = new MessageActionRow().addComponents(ColorInput);
      
        modal.addComponents(firstActionRow, secondActionRow); // Добавляем обе строки в модалку
        await interaction.showModal(modal);
      }

    })
    
    client.on('interactionCreate', async interaction => { //обработчик МОДАЛОК
      if (!interaction.isModalSubmit()) return;

      const userId = interaction.user.id;

      if (interaction.customId === 'PrepodMod') {


      const NAME = interaction.fields.getTextInputValue('PrepodName');
      const ID = interaction.fields.getTextInputValue('PrepodId');
      try {

          const BD = await prepod.findOne({ Id: ID });

          if (BD) {
            BD.Name = NAME;
            BD.Id = ID;
            await BD.save();
            console.log(`[Администратор] Был добавлен новый учитель`);

            const successMessage = new MessageEmbed()
            .setTitle('Успешно сохранено')
            .setDescription(`Новый преподаватель <@${ID}> был успешно добавлен`)
            .setColor('#B82923');
    
          await interaction.reply({ embeds: [successMessage], ephemeral: true});

            const user = await interaction.guild.members.fetch(ID);

            if (user) {
              if (!user.roles.cache.has(`1166745752278671370`)) {
                await user.roles.add(`1166745752278671370`);
              }
            }

          } else {
            const newRecord = new prepod({
              Name: NAME,
              Id: ID,
            });
    
            await newRecord.save();

            const user = await interaction.guild.members.fetch(ID);

            if (user) {
              if (!user.roles.cache.has(`1166745752278671370`)) {
                await user.roles.add(`1166745752278671370`);
              }
            }
            
            const successMessage = new MessageEmbed()
            .setTitle('Успешно сохранено')
            .setDescription(`Новый преподаватель <@${ID}> был успешно добавлен`)
            .setColor('#B82923');
    
          await interaction.reply({ embeds: [successMessage], ephemeral: true});
            console.log(`[Администратор] Был добавлен новый учитель`);
        }
      } catch (error) {
        console.error(error);
      }

      }

      if (interaction.customId === 'redakMod') {

        const NAME = interaction.fields.getTextInputValue('redakName');
        const ID = interaction.fields.getTextInputValue('redakId');
        try {
  
            const BD = await redak.findOne({ Id: ID });
  
            if (BD) {
              BD.Name = NAME;
              BD.Id = ID;
              await BD.save();
              console.log(`[Администратор] Был добавлен новый редактор`);
  
              const successMessage = new MessageEmbed()
              .setTitle('Успешно сохранено')
              .setDescription(`Новый редактор <@${ID}> был успешно добавлен`)
              .setColor('#B82923');
      
            await interaction.reply({ embeds: [successMessage], ephemeral: true});
  
              const user = await interaction.guild.members.fetch(ID);
  
              if (user) {
                if (!user.roles.cache.has(`1166758811793629284`)) {
                  await user.roles.add(`1166758811793629284`);
                }
              }
  
            } else {
              const newRecord = new prepod({
                Name: NAME,
                Id: ID,
              });
      
              await newRecord.save();
  
              const user = await interaction.guild.members.fetch(ID);
  
              if (user) {
                if (!user.roles.cache.has(`1166758811793629284`)) {
                  await user.roles.add(`1166758811793629284`);
                }
              }
              
              const successMessage = new MessageEmbed()
              .setTitle('Успешно сохранено')
              .setDescription(`Новый редактор <@${ID}> был успешно добавлен`)
              .setColor('#B82923');
      
            await interaction.reply({ embeds: [successMessage], ephemeral: true});
              console.log(`[Администратор] Был добавлен новый редактор`);
          }
        } catch (error) {
          console.error(error);
        }
  
        }

    });

  }

  async function sendControlPREPOD() {
    // const channel = await client.channels.fetch(channelAKK);
     const control = await client.channels.fetch(groopID);
 
     const ip = new MessageButton()
         .setCustomId('create')
         .setLabel('Создать группу')
         .setStyle('SUCCESS');
 
     const com = new MessageActionRow()
         .addComponents(ip);
 
     const mes = new MessageEmbed()
         .setTitle('ВЫБЕРИТЕ ДЕЙСТВИЕ:')
         .setDescription('**Создать группу** - эта кнопка создаст грппу класса')
         .setColor('#2710D1');
 
   //  const message = await control.send({ embeds: [mes], components: [com] });
 
     client.on('interactionCreate', async (interaction) => {
 
       if (!interaction.isButton()) return;
       const userId = interaction.user.id;
       
       if (interaction.customId === 'create') {
         const modal = new Modal()
           .setCustomId('createMod')
           .setTitle('Добавление');
       
         const favoriteColorInput = new TextInputComponent()
           .setCustomId('createName')
           .setLabel("Введите название группы в формате: ИС-16")
           .setStyle('SHORT');
       
         const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
       
         modal.addComponents(firstActionRow);
         await interaction.showModal(modal);
       }
 
     })
     
     client.on('interactionCreate', async interaction => { //обработчик МОДАЛОК
       if (!interaction.isModalSubmit()) return;
 
       const userId = interaction.user.id;
       const user = interaction.user;
 
       if (interaction.customId === 'createMod') {

        await interaction.deferReply({
          ephemeral: true,
      })

       const NAME = interaction.fields.getTextInputValue('createName');

       try {

      const guild = client.guilds.cache.get(GUILD_ID); //классная роль

      const roleID = await guild.roles.create({ name: NAME});//

      const member = await guild.members.fetch(userId); //

      const starID = await guild.roles.create({ name: 'Стараста'}); //

      const klassyxID = await guild.roles.create({ name: `Классный руководитель ${NAME}`}); //

      if (member) {
       await member.roles.add(roleID);  //
      }

      if (member) {
       await member.roles.add(starID); //
      }

      if (member) {
        await member.roles.add(klassyxID); //
       }

      const categorybuy = await guild.channels.create(NAME, { // Категория
        type: 'GUILD_CATEGORY',
        permissionOverwrites: [
          {
            id: guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
          },
          {
            id: roleID,
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
          },
        ],
      });
      
      const buyChannel = await guild.channels.create('📢Уведомления', { // Уведомления
        type: 'GUILD_TEXT',
        parent: categorybuy,
        permissionOverwrites: [
          {
            id: guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
          },
          {
            id: roleID,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.ATTACH_FILES],
            deny: [Permissions.FLAGS.SEND_MESSAGES],
          },
          {
            id: klassyxID,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.ATTACH_FILES, Permissions.FLAGS.SEND_MESSAGES],
          },
          {
            id: starID, 
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.ATTACH_FILES, Permissions.FLAGS.SEND_MESSAGES],
          },
        ],
      });

      const Channel = await guild.channels.create('📨Чат', { // Чат
        type: 'GUILD_TEXT',
        parent: categorybuy,
        permissionOverwrites: [
          {
            id: guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
          },
          {
            id: roleID,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.ATTACH_FILES],
          },
        ],
      });

      const Chan = await guild.channels.create('🔧Техх канал', { // техх канал
        type: 'GUILD_TEXT',
        parent: categorybuy,
        permissionOverwrites: [
          {
            id: guild.roles.everyone,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
          },
          {
            id: roleID,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
          },
          {
            id: klassyxID,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.ATTACH_FILES],
            deny: [Permissions.FLAGS.SEND_MESSAGES],
          },
          {
            id: starID, 
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.ATTACH_FILES],
            deny: [Permissions.FLAGS.SEND_MESSAGES],
          },
        ],
      });

       try {
 
           const BD = await gryppa.findOne({ Name: NAME });
 
           if (BD) {
             BD.Name = NAME;
             BD.RoleID = roleID;
             BD.Klassyxa = userId;
             BD.Starosta = starID;
             BD.yvedomlenie = buyChannel;
             BD.chat = Channel;
             BD.texx = Chan;
             BD.klassID = klassyxID;
             await BD.save();
             console.log(`[Преподаватель] Была добавлен новая группа`);

             await interaction.editReply({
              content: `Группа была успешно созданна!`,
              ephemeral: true,
          })
 
           } else {
             const newRecord = new gryppa({
              Name: NAME,
              RoleID: roleID,
              Klassyxa: userId,
              Starosta: starID,
              yvedomlenie: buyChannel,
              chat: Channel,
              texx: Chan,
              klassID: klassyxID,
             });
     
             await newRecord.save();

             await interaction.editReply({
              content: `Группа была успешно созданна!`,
              ephemeral: true,
          })
            
           console.log(`[Преподаватель] Была добавлен новая группа`);

          }
       } catch (error) {
         console.error(error);
       }
  
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
 
       }
 
     });
 
   }

   function getFutureDates(numDays) {
    const dateOptions = [];
    const today = new Date();
  
    for (let i = 0; i < numDays; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      const year = futureDate.getFullYear();
      const month = String(futureDate.getMonth() + 1).padStart(2, '0');
      const day = String(futureDate.getDate()).padStart(2, '0');
      dateOptions.push(`${day}:${month}:${year}`);
    }
  
    return dateOptions;
  }


client.login(token);