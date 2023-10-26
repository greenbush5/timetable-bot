const { Schema, model } = require('mongoose');

const shortSchema = new Schema({
	DS: {
		type: String
	},

	groop: {
		type: String
	}
});

module.exports = model('short', shortSchema);