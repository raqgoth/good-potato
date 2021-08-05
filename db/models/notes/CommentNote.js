const  {Schema, model} = require('mongoose');


const commentNoteSchema = new Schema({
    
    author: { type: String, required: true},
    comment: { type: String, required: true},
    postId:{type: String, required: true},
    date: {type : Date, default: Date.now}
}
,
{ timestamps: true}
);

module.exports = model('commentNotes',commentNoteSchema);