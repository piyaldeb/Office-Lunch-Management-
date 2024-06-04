const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    date:{
        type : String,
        required : true
    },
    options:[{
        type: String,
        required : true
    }]
});

module.exports = mongoose.model('Menu',MenuSchema);