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
  GatewayIntentBits

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
const guild = '1166726020481679400';
const kitIDholy = '1135861027146309716';

const roleIdPrepod = '1166745752278671370';


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

  client.on('ready', () => {
    console.log(`ЮХХХУ СВИСТАТЬ ВСЕХ НА ВЕРХ <3 ||Я реально работаю(наверное)!`);
    sendControlADM()
    sendControlPREPOD()
    sendControlGLAV()
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
    
      if (interaction.customId === 'pay') {
        const user = interaction.user;
        const intection = interaction
        const userRecord = await userof.findOne({ userID: interaction.user.id });
  
          
                if (userRecord) {
                  pay(user, intection);
                  interaction.reply({ content: 'Выполняю запрос!', ephemeral: true });
                } else {
                  interaction.reply({ content: 'У вас отсутствует аккаунт!', ephemeral: true });
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



client.login(token);