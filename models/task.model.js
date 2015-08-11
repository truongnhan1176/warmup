var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qlnt');
var schema = mongoose.Schema;

var taskSchema = new schema({
    notes: String,
    is_done: Boolean,
    date_created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('task', taskSchema);