const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library', { //10.deprecated method added mongodb configuration
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordatas',AuthorSchema);//change authordata to authordatas

module.exports = authordata;