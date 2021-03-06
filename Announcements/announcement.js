const mongoose =  require('mongoose');
const Schema   =  mongoose.Schema;

var announcement = new Schema({

      title: String,
      subject: String,
      date: Date,
      description: String,
      tags:[{type:String, ref:'tags'}],
      link: String,
      image: String,
      isScheduled: {type:Boolean, default:false}
});

module.exports = mongoose.model('announcements',announcement);
