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


const { token, databaseUrl } = require('./config');

const GUILD_ID = '1166726020481679400';
const adminID = '1166726152262537238';
const groopID = '1166759868519157821';
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
  });

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
 
     const message = await control.send({ embeds: [mes], components: [com] });
 
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
 
       if (interaction.customId === 'createMod') {
       const NAME = interaction.fields.getTextInputValue('createName');

       try {

      const guild = client.guilds.cache.get(GUILD_ID);

      const roleID = guild.roles.create({ name: NAME});

      console.log(roleID)
    
      const categorybuy = await guild.channels.create(NAME, {
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
      
      const buyChannel = await guild.channels.create(NAME, {
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
      
  
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
       
      //  try {
 
      //      const BD = await gryppa.findOne({ Name: NAME });
 
      //      if (BD) {
      //        BD.Name = NAME;
      //        BD.Klassyxa = userId;
      //        await BD.save();
      //        console.log(`[Преподаватель] Была добавлен новая группа`);
 
      //        const successMessage = new MessageEmbed()
      //        .setTitle('Успешно сохранено')
      //        .setDescription(`Новыая группа ${NAME} была успешно созданна`)
      //        .setColor('#2710D1');
     
      //      await interaction.reply({ embeds: [successMessage], ephemeral: true});
 
      //        const user = await interaction.guild.members.fetch(ID);
 
      //        if (user) {
      //          if (!user.roles.cache.has(`1166745752278671370`)) {
      //            await user.roles.add(`1166745752278671370`);
      //          }
      //        }
 
      //      } else {
      //        const newRecord = new prepod({
      //          Name: NAME,
      //          Id: ID,
      //        });
     
      //        await newRecord.save();
 
      //        const user = await interaction.guild.members.fetch(ID);
 
      //        if (user) {
      //          if (!user.roles.cache.has(`1166745752278671370`)) {
      //            await user.roles.add(`1166745752278671370`);
      //          }
      //        }
             
      //        const successMessage = new MessageEmbed()
      //        .setTitle('Успешно сохранено')
      //        .setDescription(`Новый преподаватель <@${ID}> был успешно добавлен`)
      //        .setColor('#B82923');
     
      //      await interaction.reply({ embeds: [successMessage], ephemeral: true});
      //        console.log(`[Администратор] Был добавлен новый учитель`);
      //    }
      //  } catch (error) {
      //    console.error(error);
      //  }
 
       }
 
     });
 
   }

client.login(token);