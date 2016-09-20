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
module.exports.getInfo = function(callback){
    Info.find(callback); 
};
  


//Get Data
module.exports.getInfoById = function(id,callback){
    Info.findById(id,callback); 
};

                

//Add Data
module.exports.addInfo = function(newInfo,callback){
    Info.create(newInfo,callback); 
};




//Update Data
module.exports.updateInfo = function(id,updateInfo,callback,options){
    var query = {_id: id };
    var update = {
       name: updateInfo.name,
       gender: updateInfo.gender
    };
    
    Info.findOneAndUpdate(query,update,callback,options); 
};