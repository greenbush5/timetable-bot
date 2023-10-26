const { Schema, model } = require('mongoose');

const stateSchema = new Schema({
	satats: {
		type: String
	},

	sprav: {
		type: String
	},

	prop: {
		type: String
	}
});

module.exports = model('state', stateSchema);