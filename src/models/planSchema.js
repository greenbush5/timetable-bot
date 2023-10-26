const { Schema, model } = require('mongoose')


const planSchema = new Schema({
    name: {
        type: String,
      },
    info: {
      type: String,
    },
  });

module.exports = model('plane', planSchema)
