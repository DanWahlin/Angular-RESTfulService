var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;
  
var SettingsSchema = new Schema({
  collectionName : {
    type : String, required: true, trim: true, default: 'customers'
  },
  nextSeqNumber: {
    type: Number, default: 1
  }
});

exports.SettingsSchema = SettingsSchema;
module.exports = mongoose.model('Settings', SettingsSchema);