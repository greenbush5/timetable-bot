import { Schema, model } from 'mongoose';

const planSchema = new Schema({
	name: {
		type: String
	},
	
	info: {
		type: String
	}
});

export default model('plane', planSchema);