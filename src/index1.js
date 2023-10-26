const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
require('./event')(client)

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

mongoose.connect(databaseUrl, { useNewUrlParser: true })
  .then(() => console.log('MongoDB запущен'))
  .catch(err => console.error('MongoDB ошибка:', err));

const GUILD_ID = '1166726020481679400';
const adminID = '1166726152262537238';
const groopID = '1166759868519157821';
const glavId = `1166818230749380711`;
const redId = `1166838868033683566`;
const guild = '1166726020481679400';
const prepodID = '1166745752278671370';
const chenelPREP = '1167154640413003797';

const roleIdPrepod = '1166745752278671370';

client.login(token);