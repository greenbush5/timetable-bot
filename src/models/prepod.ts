import { Schema, model } from 'mongoose';

const prepodSchema = new Schema({
	Name: {
		type: String
	},

	Id: {
		type: String
	},
	
	chanelID: {
		type: String
	}
});

export default model('prepodi', prepodSchema);