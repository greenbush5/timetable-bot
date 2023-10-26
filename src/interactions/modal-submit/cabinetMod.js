const red = require(`../../models/raspSchema`);

const {
  MessageActionRow,
	Modal,
	MessageSelectMenu
} = require('discord.js');

const dataMap = new Map();

module.exports = {
  execute(interaction) {
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
        content: `*Расписание успешно добавленно для группы ${userData.groop}, можете создавать новое добавление **<3***`,
        ephemeral: true,
    })
  },
};
