import { Schema, model } from 'mongoose';

const resikSchema = new Schema({
	name: {
		type: String
	},
	
	info: {
		type: String
	}
});

export default model('resik', resikSchema);