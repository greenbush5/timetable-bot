const { Schema, model } = require('mongoose')

const podavaSchema = new Schema({
	name: {
		type: String
	},
	
	info: {
		type: String
	}
});

module.exports = model('podan', podavaSchema);