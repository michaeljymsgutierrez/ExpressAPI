var mongoose = require('mongoose');

//Info Schema
var infoSchema = mongoose.Schema({
    
   name: {
       type: String,
       required: true
   },
   gender: {
       type: String,
       required: true
   } 
    
    
},{collection:'info'});


var Info = module.exports = mongoose.model('Info',infoSchema);
    
//Get All Data
module.exports.getInfo = function(callback,limit){
    Info.find(callback).limit(limit); 
};



//Get Single Data
module.exports.getInfoById = function(id,callback){
    Info.findById(id,callback); 
};



//Add Single Data
module.exports.addInfo = function(newInfo,callback){
    Info.create(newInfo,callback); 
};
