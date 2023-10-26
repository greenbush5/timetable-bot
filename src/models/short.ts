import { Schema, model } from 'mongoose';

const shortSchema = new Schema({
	DS: {
		type: String
	},

	groop: {
		type: String
	}
});

export default model('short', shortSchema);