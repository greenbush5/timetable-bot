const { Schema, model } = require('mongoose')

const raspSchema = new Schema({
	groop: {
		type: String
	},

	nomer: {
		type: String
	},

	name: {
		type: String
	},

	prepod: {
		type: String
	},

	date: {
		type: String
	},
	
	kabin: {
		type: String
	}
});

module.exports = model('red', raspSchema);