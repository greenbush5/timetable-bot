import { Schema, model } from 'mongoose';

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

export default model('state', stateSchema);