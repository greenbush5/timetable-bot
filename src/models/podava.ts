import { Schema, model } from 'mongoose';

const podavaSchema = new Schema({
	name: {
		type: String
	},
	
	info: {
		type: String
	}
});

export default model('podan', podavaSchema);