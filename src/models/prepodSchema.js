const prepodSchema = new mongoose.Schema({
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

module.exports = mongoose.model('prepodi', prepodSchema);