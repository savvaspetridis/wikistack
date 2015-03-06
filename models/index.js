var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Page, User; 
var Schema = mongoose.Schema; 


var router = express.Router();
router.get('/', function (req, res) {
  res.render('layout');
});

var pageSchema = new Schema({
	title: String, 
	url_name: String,
	owner_id: String,
	body: String,
	date: { type: Date, default: Date.now}, 
	status: Number 
});

pageSchema.virtual('full_route').get(function () {
	return '/wiki/' + url_name; 
}); 

var userSchema = new Schema ({
	name: {
		first: String, 
		last: String 
	},
	email: String
}); 

Page = mongoose.model('Page', pageSchema);
User = mongoose.model('User', userSchema); 

module.exports = {"Page": Page, "User": User}; 