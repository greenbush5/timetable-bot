const { Schema, model } = require('mongoose')

const grypSchema = new Schema({
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


module.exports = model('grypa', BotSchema)
