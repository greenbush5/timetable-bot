import { Schema, model } from 'mongoose';

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

export default model('red', raspSchema);