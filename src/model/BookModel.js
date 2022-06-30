const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library', { //deprecated method adding mongodb configuration
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdatas',BookSchema);//change bookdata to bookdatas

module.exports = bookdata;