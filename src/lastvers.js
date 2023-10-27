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

// const { token, databaseUrl } = require('./config');


const token = ``
const GUILD_ID = '1166726020481679400';
const adminID = '1166726152262537238';
const groopID = '1166759868519157821';
const glavId = `1166818230749380711`;
const redId = `1166838868033683566`;
const guild = '1166726020481679400';
const prepodID = '1166745752278671370';
const chenelPREP = '1167154640413003797';


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
  '«Инфокоммуникационные сети и системы связи»',
  '«Экономика и бухгалтерский учёт (по отраслям)»',
  '«Коммерция (по отраслям)»',
  '«Банковское дело»'
]

const resik = [
  'Медпункт',
  'Военкомат',
  'Кафедра',
  'Бухгалтерия',
  'Деканат',
]

const saivlenia = [
  'Вступление в профсоюз',
  'Отчисление',
  'Заявление об отсутствии на парах',
  'Заявка об переносе пар',
  'Выходные за свой счёт',
  'Увольнение',
]

const podava = [
  'Подача заялений',
  'Получении справки об обучении',
  'Перевыпуск пропуска',
]

mongoose.connect('mongodb+srv://g92836142:l9oRe3To4DHKjUSF@cluster0.k2u2e3g.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('MongoDB запущен'))
  .catch(err => console.error('MongoDB ошибка:', err));

  const grypSchema = new mongoose.Schema({
    Name: {
        type: String,
      },
    IDis: {
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
    chanelID: {
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
    kabin: {
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

  const resikSchema = new mongoose.Schema({
    name: {
        type: String,
      },
    info: {
      type: String,
    },
  });
  
  const resiki = mongoose.model('resik', resikSchema);

  const shortSchema = new mongoose.Schema({
    DS: {
        type: String,
      },
    groop: {
      type: String,
    },
  });
  
  const short = mongoose.model('short', shortSchema);

  const shortteaSchema = new mongoose.Schema({
    DS: {
        type: String,
      },
    groop: {
      type: String,
    },
  });
  
  const shorttea = mongoose.model('shorttea', shortteaSchema);

  const podavaSchema = new mongoose.Schema({
    name: {
        type: String,
      },
    info: {
      type: String,
    },
  });
  
  const podanoo = mongoose.model('podan', podavaSchema);

  const skasSchema = new mongoose.Schema({
    name: {
        type: String,
      },
    info: {
      type: String,
    },
  });
  
  const skas = mongoose.model('skas', skasSchema);

  client.on('ready', () => {
    console.log(`ЮХХХУ СВИСТАТЬ ВСЕХ НА ВЕРХ <3 ||Я реально работаю(наверное)!`);
    sendControlADM()
    sendControlPREPOD()
    sendControlGLAV()
    sendControlREDACK()
    sendControl()
    setActivity('Стою на защите ваших оценок!')
  });

  async function sendControlGLAV() {

    const channel = await client.channels.fetch(glavId);

    const But = new MessageButton()
        .setCustomId('raspis')
        .setLabel('Расписание')
        .setStyle('SUCCESS');
        
    const But1 = new MessageButton()
        .setCustomId('raspisPREP')
        .setLabel('Расписание преп.')
        .setStyle('SUCCESS');

    const But2 = new MessageButton()
        .setCustomId('plan')
        .setLabel('Учебный план')
        .setStyle('SUCCESS');

    const Ton = new MessageButton()
        .setCustomId('resim')
        .setLabel('Режим работы')
        .setStyle('PRIMARY');

    const Ton1 = new MessageButton()
        .setCustomId('podati')
        .setLabel('Подать заявление')
        .setStyle('PRIMARY');

    const Ton2 = new MessageButton()
        .setCustomId('ska4')
        .setLabel('Скачать заявление')
        .setStyle('PRIMARY');

    const Xop = new MessageButton()
        .setCustomId('mayraspis')
        .setLabel('Моё расписание')
        .setStyle('DANGER');
  
    const com1 = new MessageActionRow()
        .addComponents(But, But1, But2);
    
    const com2 = new MessageActionRow()
        .addComponents(Ton, Ton1, Ton2);
    
    const com3 = new MessageActionRow()
        .addComponents(Xop);
      
    const embedDescription = '- **Моё расписание**: получение своего расписание пар.' +
      '\n\n- **Расписание**: получение расписания пар любой группы' +
      '\n\n- **Расписание преп.**: получение расписания преподавателя' +
      '\n\n- **Учебный план**: получение учебного плана для нужной вам специальности' +
      '\n\n- **Режим работы**: получение расписания и контактной информации административных отделений (бухгалтерия, кафедра, медпункт и др.)' +
      '\n\n- **Подать заявление**: получение информации о подаче заявлений, получении справок, перевыпуск пропусков и т.д.' +
      '\n\n- **Скачать заявление**: получение формы заявлений или пояснительныйх записок';
  
    const mes = new MessageEmbed()
        .setTitle('Выберите действие:')
        .setDescription(embedDescription)
        .setColor('#DD131F');
  
  //    const message = await channel.send({ embeds: [mes], components: [com1, com2, com3] });

     client.on('interactionCreate', async (interaction) => { // МОЁ РАСПИСАНИЕ
      if (!interaction.isButton()) return;
    
      if (interaction.customId === 'mayraspis') { //СЮДА
        const user = await short.findOne({ DS: interaction.user.id });
    
        if (user) {
          const dateOptions = getFutureDates(7).map((date) => ({
            label: date,
            value: date,
          }));

          const dateRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('rasikADD')
              .setPlaceholder('ДАТА')
              .addOptions(dateOptions),
          );
          await interaction.reply({
            content: 'На какую дату вы хотите получить расписание?',
            components: [dateRow],
            ephemeral: true,
          });
        } else {
          const grypy = await gryppa.find({}, 'Name');
    
          const grypaOptions = grypy.map((grypa) => ({
            label: grypa.Name,
            value: grypa.Name,
          }));
    
          const grypaRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('mayrasp')
              .setPlaceholder('ГРУППА')
              .addOptions(grypaOptions),
          );
    
          await interaction.reply({
            content: 'Вы не зарегистрированы! Выберите вашу группу:',
            components: [grypaRow],
            ephemeral: true,
          });
        }
      }
    });

    client.on('interactionCreate', async (interaction) => {// МОЁ РАСПИСАНИЕ
      if (interaction.customId === 'rasikADD') {
        const selectedDate = interaction.values[0];
        const user = await short.findOne({ DS: interaction.user.id });
    
        if (user) {
              const schedule = await red.find({
                groop: user.groop,
                date: selectedDate,
              });
    
              if (schedule.length > 0) {
                const scheduleMessage = schedule.map((entry, index) => {
                  return `**Пара ${entry.nomer}**:\n📝Предмет: ${entry.name}\n😎Преподаватель: ${entry.prepod}\n🚪Кабинет: ${entry.kabin}\n`;
                }).join('\n');
        
                await interaction.reply({
                  content: `🌠**Расписание на ${selectedDate} для группы ${user.groop}:**🌠\n${scheduleMessage}`,
                  ephemeral: true,
                });
              } else {
                await interaction.reply({
                  content: `⛔На **${selectedDate}** для группы ${user.groop} **расписание отсутствует.**⛔`,
                  ephemeral: true,
                });
          }
        }
      }
    });

    client.on('interactionCreate', async (interaction) => {// МОЁ РАСПИСАНИЕ
      if (interaction.isSelectMenu()) {
        if (interaction.customId === 'mayrasp') {
          const selectedGroup = interaction.values[0];
      
          await short.create({
            DS: interaction.user.id,
            groop: selectedGroup,
          });
      
          await interaction.reply({
            content: `Вы зарегистрированы с группой: ${selectedGroup}. Повторите запрос, чтобы получить расписание.`,
            ephemeral: true,
          });
        }
      }
    });

    client.on('interactionCreate', async (interaction) => { //учебный план
      if (!interaction.isButton()) return;
    
      if (interaction.customId === 'plan') {
    
        const plansOptions = plans.map((subject) => ({
          label: subject,
          value: subject.replace(/ /g, '_').toLowerCase(),
        }));
    
        const subjectsRow = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId('xzff')
            .setPlaceholder('Предмет')
            .addOptions(plansOptions),
        );
    
        await interaction.reply({
          content: 'Выберите нужный вам план:',
          components: [subjectsRow],
          ephemeral: true
        });
      } 
    })

    client.on('interactionCreate', async (interaction) => {//учебный план
      if (interaction.isSelectMenu()) {
        if (interaction.customId === 'xzff') {
          const selectedSubject = interaction.values[0];
              const foundPlan = await plane.findOne({ name: selectedSubject });
    
          if (foundPlan) {
            const embed = new MessageEmbed()
              .setTitle(`Учебный план "${selectedSubject}":`)
              .setDescription(foundPlan.info)
              .setColor('#FF1867');
    
            await interaction.reply({ embeds: [embed], ephemeral: true});
          } else {
            const embed1 = new MessageEmbed()
            .setTitle(`Учебный план "${selectedSubject}" не найден.`)
            .setColor('#FF1867');
            await interaction.reply({ embeds: [embed1], ephemeral: true});
          }
        }
      }
    });

    client.on('interactionCreate', async (interaction) => { //Режим работы
      if (!interaction.isButton()) return;
    
      if (interaction.customId === 'resim') {
    
        const resikOptions = resik.map((subject) => ({
          label: subject,
          value: subject.replace(/ /g, '_').toLowerCase(),
        }));
    
        const subjectsRow = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId('resimmm')
            .setPlaceholder('Предмет')
            .addOptions(resikOptions),
        );
    
        await interaction.reply({
          content: 'Выберите нужную для вас информацию:',
          components: [subjectsRow],
          ephemeral: true
        });
      } 
    })

    client.on('interactionCreate', async (interaction) => {//Режим работы
      if (interaction.isSelectMenu()) {
        if (interaction.customId === 'resimmm') {
          const selectedSubject = interaction.values[0];
              const foundPlan = await resiki.findOne({ name: selectedSubject });
    
          if (foundPlan) {
            const embed = new MessageEmbed()
              .setTitle(`Режим работы "${selectedSubject}":`)
              .setDescription(foundPlan.info)
              .setColor('#FF1867');
    
            await interaction.reply({ embeds: [embed], ephemeral: true});
          } else {
            const embed1 = new MessageEmbed()
            .setTitle(`Режим работы "${selectedSubject}" не найден.`)
            .setColor('#FF1867');
            await interaction.reply({ embeds: [embed1], ephemeral: true});
          }
        }
      }
    });

    client.on('interactionCreate', async (interaction) => { // ПОДАТЬ ЗАЯВЛЕНИЕ
      if (!interaction.isButton()) return;
    
      if (interaction.customId === 'podati') {
    
        const plansOptions = podava.map((subject) => ({
          label: subject,
          value: subject.replace(/ /g, '_').toLowerCase(),
        }));
    
        const subjectsRow = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId('qwere')
            .setPlaceholder('Выбор')
            .addOptions(plansOptions),
        );
    
        await interaction.reply({
          content: 'Выберите нужное вам заявление:',
          components: [subjectsRow],
          ephemeral: true
        });
      } 
    })

    client.on('interactionCreate', async (interaction) => {// ПОДАТЬ ЗАЯВЛЕНИЕ
      if (interaction.isSelectMenu()) {
        if (interaction.customId === 'qwere') {
          const selectedSubject = interaction.values[0];
              const foundPlan = await podanoo.findOne({ name: selectedSubject });
    
          if (foundPlan) {
            const embed = new MessageEmbed()
              .setTitle(`Заявление "${selectedSubject}":`)
              .setDescription(foundPlan.info)
              .setColor('#FF1867');
    
            await interaction.reply({ embeds: [embed], ephemeral: true});
          } else {
            const embed1 = new MessageEmbed()
            .setTitle(`Заявление "${selectedSubject}" не найдено.`)
            .setColor('#FF1867');
            await interaction.reply({ embeds: [embed1], ephemeral: true});
          }
        }
      }
    });

    client.on('interactionCreate', async (interaction) => { //ОБЩЕЕ РАСПИСАНИЕ
      if (!interaction.isButton()) return;
    
      if (interaction.customId === 'raspis') { 

          const grypy = await gryppa.find({}, 'Name');
    
          const grypaOptions = grypy.map((grypa) => ({
            label: grypa.Name,
            value: grypa.Name,
          }));
    
          const grypaRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('ADDrasp')
              .setPlaceholder('Группа')
              .addOptions(grypaOptions),
          );
    
          await interaction.reply({
            content: 'Выберите группу:',
            components: [grypaRow],
            ephemeral: true,
          });
        
      }
    });

    client.on('interactionCreate', async (interaction) => {// ОБЩЕЕ РАСПИСАНИЕ
      if (interaction.customId === 'ADDrasp') {
        const selectPred = interaction.values[0];

        interaction.client.selectPred = selectPred;

        const dateOptions = getFutureDates(7).map((date) => ({
          label: date,
          value: date,
        }));

          const dateRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('obwrasikADD')
              .setPlaceholder('Дата')
              .addOptions(dateOptions),
          );
          await interaction.reply({
            content: 'На какую дату вы хотите получить расписание?',
            components: [dateRow],
            ephemeral: true,
          });
      }
    });

    client.on('interactionCreate', async (interaction) => {// ОБЩЕЕ РАСПИСАНИЕ
      if (interaction.customId === 'obwrasikADD') {
        const selectedDate = interaction.values[0];
        const selectPred = interaction.client.selectPred;
    
          const schedule = await red.find({
            groop: selectPred,
            date: selectedDate,
          });
    
          if (schedule.length > 0) {
            const scheduleMessage = schedule.map((entry, index) => {
              return `**Пара ${entry.nomer}**:\n📝Предмет: ${entry.name}\n😎Преподаватель: ${entry.prepod}\n🚪Кабинет: ${entry.kabin}\n`;
            }).join('\n');
    
            await interaction.reply({
              content: `🌠**Расписание на ${selectedDate} для группы ${selectPred}:**🌠\n${scheduleMessage}`,
              ephemeral: true,
            });
          } else {
            await interaction.reply({
              content: `⛔На **${selectedDate}** для группы ${selectPred} **расписание отсутствует.**⛔`,
              ephemeral: true,
            });
      }
    }
    });

    client.on('interactionCreate', async (interaction) => { // ПОИСК УЧИТЕЛЕЙ
      if (!interaction.isButton()) return;
    
      if (interaction.customId === 'raspisPREP') { 

          const grypy = await prepod.find({}, 'Name');
    
          const grypaOptions = grypy.map((grypa) => ({
            label: grypa.Name,
            value: grypa.Name,
          }));
    
          const grypaRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('prepodSEARCH')
              .setPlaceholder('Преподаватель')
              .addOptions(grypaOptions),
          );
    
          await interaction.reply({
            content: 'Выберите преподавателя:',
            components: [grypaRow],
            ephemeral: true,
          });
        
      }
    });

    client.on('interactionCreate', async (interaction) => {// ПОИСК УЧИТЕЛЕЙ
      if (interaction.customId === 'prepodSEARCH') {
        const selectPred = interaction.values[0];

        interaction.client.selectPred = selectPred;

        const dateOptions = getFutureDates(7).map((date) => ({
          label: date,
          value: date,
        }));

          const dateRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('obwrasikSEARCH')
              .setPlaceholder('Дата')
              .addOptions(dateOptions),
          );
          await interaction.reply({
            content: 'На какую дату вы хотите получить расписание?',
            components: [dateRow],
            ephemeral: true,
          });
      }
    });

    client.on('interactionCreate', async (interaction) => {// ПОИСК УЧИТЕЛЕЙ
      if (interaction.customId === 'obwrasikSEARCH') {
        const selectedDate = interaction.values[0];
        const selectPred = interaction.client.selectPred;
    
          const schedule = await red.find({
            prepod: selectPred,
            date: selectedDate,
          });
    
          if (schedule.length > 0) {
            const scheduleMessage = schedule.map((entry, index) => {
              return `**Пара ${entry.nomer}**:\n💡Группа: ${entry.groop}\n📝Предмет: ${entry.name}\n🚪Кабинет: ${entry.kabin}\n`;
            }).join('\n');
    
            await interaction.reply({
              content: `🌠**Расписание на ${selectedDate} для преподавателя ${selectPred}:**🌠\n${scheduleMessage}`,
              ephemeral: true,
            });
          } else {
            await interaction.reply({
              content: `⛔На **${selectedDate}** для преподавателя ${selectPred} **расписание отсутствует.**⛔`,
              ephemeral: true,
            });
      }
    }
    });

    client.on('interactionCreate', async (interaction) => { // СКАЧАТЬ ЗАЯВЛЕНИЕ
      if (!interaction.isButton()) return;
    
      if (interaction.customId === 'ska4') {
    
        const plansOptions = saivlenia.map((subject) => ({
          label: subject,
          value: subject.replace(/ /g, '_').toLowerCase(),
        }));
    
        const subjectsRow = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId('ystan')
            .setPlaceholder('Выбор')
            .addOptions(plansOptions),
        );
    
        await interaction.reply({
          content: 'Выберите нужное вам заявление:',
          components: [subjectsRow],
          ephemeral: true
        });
      } 
    })

    client.on('interactionCreate', async (interaction) => {// СКАЧАТЬ ЗАЯВЛЕНИЕ
      if (interaction.isSelectMenu()) {
        if (interaction.customId === 'ystan') {
          const selectedSubject = interaction.values[0];
              const foundPlan = await skas.findOne({ name: selectedSubject });
    
          if (foundPlan) {
            const embed = new MessageEmbed()
              .setTitle(`Заявление "${selectedSubject}":`)
              .setDescription(foundPlan.info)
              .setColor('#FF1867');
    
            await interaction.reply({ embeds: [embed], ephemeral: true});
          } else {
            const embed1 = new MessageEmbed()
            .setTitle(`Заявление "${selectedSubject}" не найдено.`)
            .setColor('#FF1867');
            await interaction.reply({ embeds: [embed1], ephemeral: true});
          }
        }
      }
    });


  }

  async function sendControlREDACK() {
    const channel = await client.channels.fetch(redId);
  
    const But = new MessageButton()
      .setCustomId('dobras')
      .setLabel('Добавить расписание')
      .setStyle('DANGER');
  
    const But2 = new MessageButton()
      .setCustomId('yvedomly')
      .setLabel('Уведомление')
      .setStyle('DANGER');

    const But6 = new MessageButton()
      .setCustomId('prepyvedomly')
      .setLabel('Уведомление преп.')
      .setStyle('DANGER');

    const But3 = new MessageButton()
      .setCustomId('plank')
      .setLabel('Учебный план')
      .setStyle('PRIMARY');

    const But4 = new MessageButton()
      .setCustomId('reshim')
      .setLabel('Режим работы')
      .setStyle('SUCCESS');

    const But5 = new MessageButton()
      .setCustomId('poddav')
      .setLabel('Подача заявлений')
      .setStyle('SUCCESS');

    const But7 = new MessageButton()
      .setCustomId('skasred')
      .setLabel('Скачать заявление')
      .setStyle('SUCCESS');
  
    const com1 = new MessageActionRow()
      .addComponents(But, But2, But6);

    const com2 = new MessageActionRow()
      .addComponents(But4, But5, But7);

    const com3 = new MessageActionRow()
      .addComponents(But3);

    const embedDescription = '- **Добавить расписание**: добавление расписания' +
      '\n- **Уведомление**: отправление уведомления группе (об изменении расписания и др.)' +
      '\n- **Уведомлени преп.**: отправление уведомления преподавателю (об изменении расписания и др.)' +
      '\n- **Режим работы**: редактирование/добавление режима работы' +
      '\n- **Подача заявлений**: редактирование/добавление информации о подаче заявлений' +
      '\n- **Скачать заявление**: редактирование/добавление информаии и ссылок на скачивание заявлений' +
      '\n- **Учебный план**: редактирование/добавление учебного плана';
  
    const mes = new MessageEmbed()
      .setTitle('**Выберите действие:**')
      .setDescription(embedDescription)
      .setColor('#DD131F');
 
   // const message = await channel.send({ embeds: [mes], components: [com1, com2, com3] });

   const dataMap = new Map();

   client.on('interactionCreate', async (interaction) => {
     if (!interaction.isButton() && !interaction.isSelectMenu()) return;
   
     const user = interaction.user;
     if (!dataMap.has(user.id)) {
       dataMap.set(user.id, {});
     }
   
     if (interaction.customId === 'dobras') {
       const grypy = await gryppa.find({}, 'Name');
       const prepodi = await prepod.find({}, 'Name');
   
       const grypaOptions = grypy.map((grypa) => ({
         label: grypa.Name,
         value: grypa.Name,
       }));
   
       const prepodOptions = prepodi.map((prepod) => ({
         label: prepod.Name,
         value: prepod.Name,
       }));
   
       const numberOptions = Array.from({ length: 7 }, (_, i) => ({
         label: `${i + 1}`,
         value: `${i + 1}`,
       }));
   
       const subjectsOptions = subjectsArray.map((subject) => ({
         label: subject,
         value: subject.replace(/ /g, '_').toLowerCase(),
       }));
   
       const dateOptions = getFutureDates(7).map((date) => ({
         label: date,
         value: date,
       }));
   
       const grypaRow = new MessageActionRow().addComponents(
         new MessageSelectMenu()
           .setCustomId('classADD')
           .setPlaceholder('Группа')
           .addOptions(grypaOptions),
       );
   
       const numberRow = new MessageActionRow().addComponents(
         new MessageSelectMenu()
           .setCustomId('numberADD')
           .setPlaceholder('Номер пары')
           .addOptions(numberOptions),
       );
   
       const subjectsRow = new MessageActionRow().addComponents(
         new MessageSelectMenu()
           .setCustomId('subjectiiADD')
           .setPlaceholder('Предмет')
           .addOptions(subjectsOptions),
       );
   
       const prepodRow = new MessageActionRow().addComponents(
         new MessageSelectMenu()
           .setCustomId('prepodiiADD')
           .setPlaceholder('Преподаватель')
           .addOptions(prepodOptions),
       );
   
       const dateRow = new MessageActionRow().addComponents(
         new MessageSelectMenu()
           .setCustomId('dateADD')
           .setPlaceholder('Дата')
           .addOptions(dateOptions),
       );
   
       await interaction.reply({
         content: 'Выберите группу, номер пары, предмет, преподавателя и дату:',
         components: [grypaRow, numberRow, dateRow, subjectsRow, prepodRow],
         ephemeral: true,
       });
     }
   });
  
   async function saveToDatabase(user, interaction) { //РАСПИСАНИЕ
    const userData = dataMap.get(user.id);
    if (
      userData.groop &&
      userData.nomer &&
      userData.name &&
      userData.prepod &&
      userData.date
    ) {
      const cabinetModal = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId('cabinetModal')
          .setLabel('Ввести номер кабинета')
          .setStyle('PRIMARY')
      );

      await interaction.followUp({
        content: 'Для продолжения, введите номер кабинета:',
        components: [cabinetModal],
        ephemeral: true,
      });
    }
  }

  
  const messages = {}

client.on('interactionCreate', async (interaction) => { // РАСПИСАНИЕ
    if (!interaction.isSelectMenu()) return;
  
    const user = interaction.user;
    const userData = dataMap.get(user.id);
    if (interaction.customId === 'classADD') {
      const selectedGroup = interaction.values[0];
      dataMap.get(user.id).groop = selectedGroup;
      if(messages[user.id]) {
				const message = messages[user.id]
     const iterek = await message.edit({
       content: 'Группа успешно принята!',
       ephemeral: true,
      })
     } else {
       const iterek = await interaction.reply({
         content: 'Группа успешно принята!',
         ephemeral: true,
        })
      messages[user.id] = iterek;
     }
    }else if (interaction.customId === 'numberADD') {
            const selectedNumber = interaction.values[0];
            console.log(`Выбран номер пары: ${selectedNumber}`);
            dataMap.get(user.id).nomer = selectedNumber;
            if(messages[user.id]) {
           const iterek = await interaction.editReply({
             content: 'Группа успешно принята!',
             ephemeral: true,
            })
           } else {
             const iterek = await interaction.reply({
               content: 'Группа успешно принята!',
               ephemeral: true,
              })
            messages[user.id] = iterek;
           }
          } else if (interaction.customId === 'subjectiiADD') {
            const selectedSubject = interaction.values[0];
            console.log(`Выбран предмет: ${selectedSubject}`);
            dataMap.get(user.id).name = selectedSubject;     
            if(messages[user.id]) {
           const iterek = await interaction.editReply({
             content: 'Группа успешно принята!',
             ephemeral: true,
            })
            messages[user.id] = iterek;
           } else {
             const iterek = await interaction.reply({
               content: 'Группа успешно принята!',
               ephemeral: true,
              })
            messages[user.id] = iterek;
           }
          } else if (interaction.customId === 'prepodiiADD') {
            const selectedPrepod = interaction.values[0];
            console.log(`Выбран преподаватель: ${selectedPrepod}`);
            dataMap.get(user.id).prepod = selectedPrepod;
            if(messages[user.id]) {
           const iterek = await interaction.editReply({
             content: 'Группа успешно принята!',
             ephemeral: true,
            })
            messages[user.id] = iterek;
           } else {
             const iterek = await interaction.reply({
               content: 'Группа успешно принята!',
               ephemeral: true,
              })
            messages[user.id] = iterek;
           }
          } else if (interaction.customId === 'dateADD') {
            const selectedDate = interaction.values[0];
            if(messages[user.id]) {
           const iterek = await interaction.editReply({
             content: 'Группа успешно принята!',
             ephemeral: true,
            })
           } else {
             const iterek = await interaction.reply({
               content: 'Группа успешно принята!',
               ephemeral: true,
              })
            messages[user.id] = iterek;
           }
            console.log(`Выбрана дата: ${selectedDate}`);
            dataMap.get(user.id).date = selectedDate;
  }
  
    saveToDatabase(user, interaction);
  });

  client.on('interactionCreate', async (interaction) => { //РАСПИСАНИЕ
    if (interaction.customId === 'cabinetModal') {
      const modal = new Modal()
      .setCustomId('cabinetMod')
      .setTitle(`Добавить кабинет:`);
    const favoriteColorInput = new TextInputComponent()
      .setCustomId('cabinetId')
      .setLabel("Введите иномер кабинета")
      .setStyle('SHORT');
    const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
    modal.addComponents(firstActionRow);
    await interaction.showModal(modal);
    }
  });
  
  client.on('interactionCreate', async (interaction) => { //РАСПИСАНИЕ
    if (!interaction.isModalSubmit()) return;
  
    if (interaction.customId === 'cabinetMod') {
      const user = interaction.user;
      const userData = dataMap.get(user.id);
      const info = interaction.fields.getTextInputValue('cabinetId');
      dataMap.get(user.id).class = info;

      const existingRed = await red.findOne({
        groop: userData.groop,
        nomer: userData.nomer,
        name: userData.name,
        prepod: userData.prepod,
        date: userData.date,
        kabin: userData.class
      });
  
      if (existingRed) {
        await red.updateOne(
          {
            groop: userData.groop,
            nomer: userData.nomer,
            name: userData.name,
            prepod: userData.prepod,
            date: userData.date,
            kabin: userData.class
          },
          { /* Твой сматфон не звонил бы, чёрт возьми, еслиб прогрмаммисты были бы нормальными людьми) */ }
        );
      } else {
        const newRed = new red({
          groop: userData.groop,
          nomer: userData.nomer,
          name: userData.name,
          prepod: userData.prepod,
          date: userData.date,
          kabin: userData.class
        });
        await newRed.save();
      }
  
      dataMap.delete(user.id);
  
      await interaction.reply({
        content: `*Расписание успешно добавленно для группы ${userData.groop}. Можете создавать новое добавление **<3***`,
        ephemeral: true,
    })

    }
  });
      

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
              .setPlaceholder('Предмет')
              .addOptions(plansOptions),
          );
      
          await interaction.reply({
            content: 'Выберите желаемый план:',
            components: [subjectsRow],
            ephemeral: true
          });
        } 
      })

      client.on('interactionCreate', async (interaction) => { //учебный план
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
      
      client.on('interactionCreate', async (interaction) => { ///учебный план
        if (!interaction.isModalSubmit()) return;
      
        if (interaction.customId === 'HitMod') {
          const info = interaction.fields.getTextInputValue('HitId');
          const selectedSubject = interaction.client.selectedSubject;
      
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

      client.on('interactionCreate', async (interaction) => { //Уведомление
        if (!interaction.isButton()) return;
      
        if (interaction.customId === 'yvedomly') {

          const grypy = await gryppa.find({}, 'Name');

          const grypaOptions = grypy.map((grypa) => ({
            label: grypa.Name,
            value: grypa.Name,
          }));
      
          const grypaRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('viborgroop')
              .setPlaceholder('Группа')
              .addOptions(grypaOptions),
          );
      
          await interaction.reply({
            content: 'Выберите нужную группу для оповещения:',
            components: [grypaRow],
            ephemeral: true
          });
        } 
      })

      client.on('interactionCreate', async (interaction) => {//Уведомление
        if (interaction.customId === 'viborgroop') {
          const selectedSubject = interaction.values[0];
      
          interaction.client.selectedSubject = selectedSubject;
      
          const modal = new Modal()
            .setCustomId('yvedMod')
            .setTitle(`Уведомить группу ${selectedSubject}:`);
          const favoriteColorInput = new TextInputComponent()
            .setCustomId('yvedId')
            .setLabel("Введите уведомление для группы")
            .setStyle('PARAGRAPH');
          const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
          modal.addComponents(firstActionRow);
          await interaction.showModal(modal);
        }
      });
      
      client.on('interactionCreate', async (interaction) => {//Уведомление
        if (!interaction.isModalSubmit()) return;
        
        if (interaction.customId === 'yvedMod') {
          const notificationText = interaction.fields.getTextInputValue('yvedId');
      
          const selectedGroup = await gryppa.findOne({ Name: interaction.client.selectedSubject });
      
          if (selectedGroup) {
            const channelString = selectedGroup.yvedomlenie; 
            const channelId = channelString.replace(/\D/g, ''); 
            const channel = interaction.guild.channels.cache.get(channelId);
          
            if (channel) {
              await channel.send(notificationText);
              interaction.reply({ content: 'Уведомление успешно отправлено!', ephemeral: true });
            } else {
              interaction.reply({ content: 'Канал не найден!', ephemeral: true });
            }
          } else {
            interaction.reply({ content: 'Группа не найдена!', ephemeral: true });
          }
        }
      });

      client.on('interactionCreate', async (interaction) => { //учебный план
        if (!interaction.isButton()) return;
      
        if (interaction.customId === 'reshim') {
      
          const plansOptions = resik.map((subject) => ({
            label: subject,
            value: subject.replace(/ /g, '_').toLowerCase(),
          }));
      
          const subjectsRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('resikADD')
              .setPlaceholder('Предмет')
              .addOptions(plansOptions),
          );
      
          await interaction.reply({
            content: 'Выберите желаемый план:',
            components: [subjectsRow],
            ephemeral: true
          });
        } 
      })

      client.on('interactionCreate', async (interaction) => { //учебный план
        if (interaction.customId === 'resikADD') {
          const selectedSubject = interaction.values[0];
      
          interaction.client.selectedSubject = selectedSubject;
      
          const modal = new Modal()
            .setCustomId('resikMod')
            .setTitle(`Добавить/изменить информацию:`);
          const favoriteColorInput = new TextInputComponent()
            .setCustomId('resikId')
            .setLabel("Введите информацию о выбранном пункте")
            .setStyle('PARAGRAPH');
          const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
          modal.addComponents(firstActionRow);
          await interaction.showModal(modal);
        }
      });
      
      client.on('interactionCreate', async (interaction) => { ///учебный план
        if (!interaction.isModalSubmit()) return;
      
        if (interaction.customId === 'resikMod') {
          const info = interaction.fields.getTextInputValue('resikId');
          const selectedSubject = interaction.client.selectedSubject;
      
          const existingPlan = await resiki.findOne({ name: selectedSubject });
      
          if (existingPlan) {
            existingPlan.info = info;
            await existingPlan.save();
            await interaction.update('Успешно сохранено!');
          } else {
            const newPlan = new resiki({
              name: selectedSubject,
              info: info,
            });
            await newPlan.save();
            await interaction.update('Успешно сохранено!');
          }
        }
      });

      client.on('interactionCreate', async (interaction) => { //ПОДАТЬ ЗАЯВЛЕНИЕ
        if (!interaction.isButton()) return;
      
        if (interaction.customId === 'poddav') {
      
          const plansOptions = podava.map((subject) => ({
            label: subject,
            value: subject.replace(/ /g, '_').toLowerCase(),
          }));
      
          const subjectsRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('podavaADD')
              .setPlaceholder('Раздел')
              .addOptions(plansOptions),
          );
      
          await interaction.reply({
            content: 'Выберите желаемый раздел:',
            components: [subjectsRow],
            ephemeral: true
          });
        } 
      })

      client.on('interactionCreate', async (interaction) => { //ПОДАТЬ ЗАЯВЛЕНИЕ
        if (interaction.customId === 'podavaADD') {
          const selectedSubject = interaction.values[0];
      
          interaction.client.selectedSubject = selectedSubject;
      
          const modal = new Modal()
            .setCustomId('podavaMod')
            .setTitle(`Добавить/изменить раздел:`);
          const favoriteColorInput = new TextInputComponent()
            .setCustomId('podavaId')
            .setLabel("Введите информацию нужную информацию")
            .setStyle('PARAGRAPH');
          const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
          modal.addComponents(firstActionRow);
          await interaction.showModal(modal);
        }
      });
      
      client.on('interactionCreate', async (interaction) => {//ПОДАТЬ ЗАЯВЛЕНИЕ
        if (!interaction.isModalSubmit()) return;
      
        if (interaction.customId === 'podavaMod') {
          const info = interaction.fields.getTextInputValue('podavaId');
          const selectedSubject = interaction.client.selectedSubject;
      
          const existingPlan = await podanoo.findOne({ name: selectedSubject });
      
          if (existingPlan) {
            existingPlan.info = info;
            await existingPlan.save();
            await interaction.update('Успешно сохранено!');
          } else {
            const newPlan = new podanoo({
              name: selectedSubject,
              info: info,
            });
            await newPlan.save();
            await interaction.update('Успешно сохранено!');
          }
        }
      });

      client.on('interactionCreate', async (interaction) => { //Уведомление УЧИТЕЛЯ
        if (!interaction.isButton()) return;
      
        if (interaction.customId === 'prepyvedomly') {

          const grypy = await prepod.find({}, 'Name');

          const grypaOptions = grypy.map((grypa) => ({
            label: grypa.Name,
            value: grypa.Name,
          }));
      
          const grypaRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('prepinfo')
              .setPlaceholder('Преподаватель')
              .addOptions(grypaOptions),
          );
      
          await interaction.reply({
            content: 'Выберите нужного преподавателя для оповещения:',
            components: [grypaRow],
            ephemeral: true
          });
        } 
      })

      client.on('interactionCreate', async (interaction) => {//Уведомление УЧИТЕЛЯ
        if (interaction.customId === 'prepinfo') {
          const selectedSubject = interaction.values[0];
      
          interaction.client.selectedSubject = selectedSubject;
      
          const modal = new Modal()
            .setCustomId('prepinfoMod')
            .setTitle(`Уведомить ${selectedSubject}:`);
          const favoriteColorInput = new TextInputComponent()
            .setCustomId('prepinfoId')
            .setLabel("Введите уведомление для выбранного преподавателя")
            .setStyle('PARAGRAPH');
          const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
          modal.addComponents(firstActionRow);
          await interaction.showModal(modal);
        }
      });
      
      client.on('interactionCreate', async (interaction) => {//Уведомление УЧИТЕЛЯ
        if (!interaction.isModalSubmit()) return;
        
        if (interaction.customId === 'prepinfoMod') {
          const notificationText = interaction.fields.getTextInputValue('prepinfoId');
      
          const selectedGroup = await prepod.findOne({ Name: interaction.client.selectedSubject });
      
          if (selectedGroup) {
            const channelString = selectedGroup.chanelID; 
            const channelId = channelString.replace(/\D/g, ''); 
            const channel = interaction.guild.channels.cache.get(channelId);

            if (channel) {
              await channel.send(notificationText);
              interaction.reply({ content: 'Уведомление успешно отправлено!', ephemeral: true });
            } else {
              interaction.reply({ content: 'Канал не найден!', ephemeral: true });
            }
          } else {
            interaction.reply({ content: 'Группа не найдена!', ephemeral: true });
          }
        }
      });

      client.on('interactionCreate', async (interaction) => { //СКАЧАТЬ ЗАЯВЛЕНИЕ
        if (!interaction.isButton()) return;
      
        if (interaction.customId === 'skasred') {
      
          const plansOptions = saivlenia.map((subject) => ({
            label: subject,
            value: subject.replace(/ /g, '_').toLowerCase(),
          }));
      
          const subjectsRow = new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId('saivleniaADD')
              .setPlaceholder('Раздел')
              .addOptions(plansOptions),
          );
      
          await interaction.reply({
            content: 'Выберите желаемый раздел:',
            components: [subjectsRow],
            ephemeral: true
          });
        } 
      })

      client.on('interactionCreate', async (interaction) => { //СКАЧАТЬ ЗАЯВЛЕНИЕ
        if (interaction.customId === 'saivleniaADD') {
          const selectedSubject = interaction.values[0];
      
          interaction.client.selectedSubject = selectedSubject;
      
          const modal = new Modal()
            .setCustomId('saivleniaMod')
            .setTitle(`Добавить/изменить раздел:`);
          const favoriteColorInput = new TextInputComponent()
            .setCustomId('saivleniaId')
            .setLabel("Предоставьте ссылки на информацию")
            .setStyle('PARAGRAPH');
          const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
          modal.addComponents(firstActionRow);
          await interaction.showModal(modal);
        }
      });
      
      client.on('interactionCreate', async (interaction) => {//СКАЧАТЬ ЗАЯВЛЕНИЕ
        if (!interaction.isModalSubmit()) return;
      
        if (interaction.customId === 'saivleniaMod') {
          const info = interaction.fields.getTextInputValue('saivleniaId');
          const selectedSubject = interaction.client.selectedSubject;
      
          const existingPlan = await skas.findOne({ name: selectedSubject });
      
          if (existingPlan) {
            existingPlan.info = info;
            await existingPlan.save();
            await interaction.update('Успешно сохранено!');
          } else {
            const newPlan = new skas({
              name: selectedSubject,
              info: info,
            });
            await newPlan.save();
            await interaction.update('Успешно сохранено!');
          }
        }
      });
      
  }

  async function sendControlADM() {
   // const channel = await client.channels.fetch(channelAKK);
    const control = await client.channels.fetch(adminID);

    const ip = new MessageButton()
        .setCustomId('prepod')
        .setLabel('Добавить преподавателя')
        .setStyle('DANGER');

    const cont = new MessageButton()
        .setCustomId('redak')
        .setLabel('Добавить редактора')
        .setStyle('DANGER');

    const com = new MessageActionRow()
        .addComponents(ip, cont);

    const embedDescription = '- **Добавить преподавателя**: добавление нового преподавателя' +
      '\n\n- **Добавить редактора**: добавление пользователя на должность редактора (управление расписанием и т.д.)';

    const mes = new MessageEmbed()
        .setTitle('Выберите действие:')
        .setDescription(embedDescription)
        .setColor('#DD131F');

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
      const guild = client.guilds.cache.get(GUILD_ID); //классная роль

      if (interaction.customId === 'PrepodMod') {


      const NAME = interaction.fields.getTextInputValue('PrepodName');
      const ID = interaction.fields.getTextInputValue('PrepodId');
      const user = await client.users.fetch(ID);
      try {

        const categorybuy = await guild.channels.create(NAME, { // Категория
          type: 'GUILD_CATEGORY',
          permissionOverwrites: [
            {
              id: guild.roles.everyone,
              deny: [Permissions.FLAGS.VIEW_CHANNEL],
            },
            {
              id: user,
              allow: [Permissions.FLAGS.VIEW_CHANNEL],
            },
          ],
        });
        
        const buyChannel = await guild.channels.create('📨Уведомления', { // Уведомления
          type: 'GUILD_TEXT',
          parent: categorybuy,
          permissionOverwrites: [
            {
              id: guild.roles.everyone,
              deny: [Permissions.FLAGS.VIEW_CHANNEL],
            },
            {
              id: user,
              allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.ATTACH_FILES],
           },
          ],
        });

          const BD = await prepod.findOne({ Id: ID });

          if (BD) {
            BD.Name = NAME;
            BD.Id = ID;
            BD.chanelID = buyChannel;
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
              BD: buyChannel,
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
         .setTitle('Выберите действие')
         .setDescription('**Создать группу** - создание группы класса')
         .setColor('#DD131F');
 
  // const message = await control.send({ embeds: [mes], components: [com] });
 
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

      const ID = generateRandomId()

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

      const DS = await guild.channels.create('📒Домашнее Задание', { // Домашнее задание
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

      buyChannel.send(`🚀 Группа успешно созданна! ID группы - **${ID}**. 🚀`);

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
          },
        ],
      });

      const embedDescription = '- **Добавить учиника** что бы добавть учиника напшите в чат !ученик <DISCORD ID ученика> <ID вашей группы(можно узнать в канале уведомления)>' +
      '\n\n- **Пример**: !ученик 1166735371116220517 41032' +
      '\n\n- **Добавить старосту** что бы добавть старосту напшите в чат !староста <DISCORD ID старосты> <ID вашей группы(можно узнать в канале уведомления)>' +
      '\n\n- **Пример**: !староста 631173717325512715 41032' 
 
     const mes = new MessageEmbed()
         .setTitle('Выберите действие')
         .setDescription(embedDescription) // ?????
         .setColor('#B82923');
 
       const message = await Chan.send({ embeds: [mes]});

       try {
           const BD = await gryppa.findOne({ Name: NAME });
 
           if (BD) {
             BD.Name = NAME;
             BD.IDis = ID;
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
              IDis: ID,
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

   async function sendControl() {
     const control = await client.channels.fetch(chenelPREP);
 
     const ip = new MessageButton()
         .setCustomId('yvedomlp')
         .setLabel('Уведомить группу')
         .setStyle('SUCCESS');
 
     const cont = new MessageButton()
         .setCustomId('prepraspis')
         .setLabel('Моё расписание')
         .setStyle('SUCCESS');
 
     const com = new MessageActionRow()
         .addComponents(cont, ip);

      const embedDescription = '- **Уведомить группу**: уведомление нужной вам группы для дачи домашнего задания/другой информации' +
      '\n\n- **Моё расписание**: узнать ваше расписание пар';
 
     const mes = new MessageEmbed()
         .setTitle('Выберите действие')
         .setDescription(embedDescription) // ?????
         .setColor('#B82923');
 
      // const message = await control.send({ embeds: [mes], components: [com] });

        client.on('interactionCreate', async (interaction) => { // МОЁ РАСПИСАНИЕ
          if (!interaction.isButton()) return;
        
          if (interaction.customId === 'prepraspis') { 
            const user = await shorttea.findOne({ DS: interaction.user.id });
        
            if (user) {
              const dateOptions = getFutureDates(7).map((date) => ({
                label: date,
                value: date,
              }));
    
              const dateRow = new MessageActionRow().addComponents(
                new MessageSelectMenu()
                  .setCustomId('teachshort')
                  .setPlaceholder('Дата')
                  .addOptions(dateOptions),
              );
              await interaction.reply({
                content: 'На какую дату вы хотите получить расписание?',
                components: [dateRow],
                ephemeral: true,
              });
            } else {
              const grypy = await prepod.find({}, 'Name');
        
              const grypaOptions = grypy.map((grypa) => ({
                label: grypa.Name,
                value: grypa.Name,
              }));
        
              const grypaRow = new MessageActionRow().addComponents(
                new MessageSelectMenu()
                  .setCustomId('mayteach')
                  .setPlaceholder('Группа')
                  .addOptions(grypaOptions),
              );
        
              await interaction.reply({
                content: 'Вы не зарегистрированы! Выберите вашу фамилию:',
                components: [grypaRow],
                ephemeral: true,
              });
            }
          }
        });
    
        client.on('interactionCreate', async (interaction) => {// МОЁ РАСПИСАНИЕ
          if (interaction.customId === 'teachshort') {
            const selectedDate = interaction.values[0];
            const user = await shorttea.findOne({ DS: interaction.user.id });
            const test = user.groop
        
            if (user) {
              const schedule = await red.find({
                prepod: test,
                date: selectedDate,
              });

              if (schedule.length > 0) {
                const scheduleMessage = schedule.map((entry, index) => {
                  return `**Пара ${entry.nomer}**:\n💡Группа: ${entry.groop}\n📝Предмет: ${entry.name}\n🚪Кабинет: ${entry.kabin}\n`;
                }).join('\n');
        
                await interaction.reply({
                  content: `🌠**Расписание на ${selectedDate} для группы ${user.groop}:**🌠\n${scheduleMessage}`,
                  ephemeral: true,
                });
              } else {
                await interaction.reply({
                  content: `⛔На **${selectedDate}** для группы ${user.groop} **расписание отсутствует.**⛔`,
                  ephemeral: true,
                });
              }
            }
          }
        });
    
        client.on('interactionCreate', async (interaction) => {// МОЁ РАСПИСАНИЕ
          if (interaction.isSelectMenu()) {
            if (interaction.customId === 'mayteach') {
              const selectedGroup = interaction.values[0];
          
              await shorttea.create({
                DS: interaction.user.id,
                groop: selectedGroup,
              });
          
              await interaction.reply({
                content: `Вы зарегистрированы с фамилией ${selectedGroup}. Повторите запрос чтобы получить расписание.`,
                ephemeral: true,
              });
            }
          }
        });
 
        client.on('interactionCreate', async (interaction) => { //Уведомление ГРУППЫ
          if (!interaction.isButton()) return;
        
          if (interaction.customId === 'yvedomlp') {
  
            const grypy = await gryppa.find({}, 'Name');
  
            const grypaOptions = grypy.map((grypa) => ({
              label: grypa.Name,
              value: grypa.Name,
            }));
        
            const grypaRow = new MessageActionRow().addComponents(
              new MessageSelectMenu()
                .setCustomId('yvelpred')
                .setPlaceholder('Группа')
                .addOptions(grypaOptions),
            );
        
            await interaction.reply({
              content: 'Выберите нужного преподавателя для оповещения:',
              components: [grypaRow],
              ephemeral: true
            });
          } 
        })
  
        client.on('interactionCreate', async (interaction) => {//Уведомление ГРУППЫ
          if (interaction.customId === 'yvelpred') {
            const selectedSubject = interaction.values[0];
        
            interaction.client.selectedSubject = selectedSubject;
        
            const modal = new Modal()
              .setCustomId('yvelpredMod')
              .setTitle(`Уведомить ${selectedSubject}:`);
            const favoriteColorInput = new TextInputComponent()
              .setCustomId('yvelpredId')
              .setLabel("Введите уведомление для группы")
              .setStyle('PARAGRAPH');
            const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
            modal.addComponents(firstActionRow);
            await interaction.showModal(modal);
          }
        });
        
        client.on('interactionCreate', async (interaction) => {//Уведомление ГРУППЫ
          if (!interaction.isModalSubmit()) return;
          
          if (interaction.customId === 'yvelpredMod') {
            const notificationText = interaction.fields.getTextInputValue('yvelpredId');
        
            const selectedGroup = await gryppa.findOne({ Name: interaction.client.selectedSubject });
        
            if (selectedGroup) {
              const channelString = selectedGroup.yvedomlenie; 
              const channelId = channelString.replace(/\D/g, ''); 
              const channel = interaction.guild.channels.cache.get(channelId);
  
              if (channel) {
                await channel.send(notificationText);
                interaction.reply({ content: 'Уведомление успешно отправлено!', ephemeral: true });
              } else {
                interaction.reply({ content: 'Канал не найден!', ephemeral: true });
              }
            } else {
              interaction.reply({ content: 'Группа не найдена!', ephemeral: true });
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

  client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!ученик')) {
      const args = message.content.split(' ');
      if (args.length !== 3) {
        message.reply('Используйте команду следующим образом: !ученик <Discord ID ученика> <ID Вашей группы>');
        return;
      }
  
      const userID = args[1];
      const idishka = args[2];
  
      try {
        const user = await gryppa.findOne({ IDis: idishka });
  
        if (!user) {
          message.reply('Группа не найдена! Проверьте название.');
          return;
        }
  
        const roleID = user.RoleID.replace(/<@&|>/g, '');
        const guild = client.guilds.cache.get(GUILD_ID); 
  
        const member = await guild.members.fetch(userID);
  
        if (member.roles.cache.has(prepodID)) {
          await member.roles.add(roleID);
          await message.reply(`Ученик <@${userID}> успешно добавлен в ваш класс!`);
        } else {
          message.reply('Отказано в доступе. :robot:');
        }
  
      } catch (error) {
        console.error(error);
        message.reply('Произошла ошибка при выполнении команды.');
      }
    }

    if (message.content.startsWith('!староста')) {
      const args = message.content.split(' ');
      if (args.length !== 3) {
        message.reply('Используйте команду следующим образом: !староста <Discord ID старосты> <ID Вашей группы>');
        return;
      }
  
      const userID = args[1];
      const idishka = args[2];
  
      try {
        const user = await gryppa.findOne({ IDis: idishka });
  
        if (!user) {
          message.reply('Группа не найдена, проверьте название');
          return;
        }
  
        const roleID = user.Starosta.replace(/<@&|>/g, '');
        console.log(user.Starosta)
        const guild = client.guilds.cache.get(GUILD_ID); 
  
        const member = await guild.members.fetch(userID);
  
        if (member.roles.cache.has(prepodID)) {
          await member.roles.add(roleID);
          await message.reply(`Староста <@${userID}> успешна добавлена в ваш класс!`);
        } else {
          message.reply('В доступе отказано. :robot:');
        }
  
      } catch (error) {
        console.error(error);
        message.reply('Произошла ошибка при выполнении команды.');
      }
    }

  });

  function generateRandomId(length = 5) {
    const characters = '0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  }

  function setActivity(activityText) {
    client.user.setActivity(activityText, { type: 'PLAYING' }); // Можете изменить тип активности
  }

client.login(token);
