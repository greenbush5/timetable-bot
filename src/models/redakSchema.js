const { Schema, model } = require('mongoose')

const resikSchema = new Schema({
	name: {
		type: String
	},
	
	info: {
		type: String
	}
});

module.exports = model('resik', resikSchema);