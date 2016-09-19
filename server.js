var  express = require('express');
var  app = express();
var  bodyParser = require('body-parser');
var  mongoose = require('mongoose');

//Require From models
Info = require('./models/data_info');

//Connect to Mongoose
mongoose.connect("mongodb://localhost/mydb");
var db = mongoose.connection;



app.get('/',function(req,res){
    
    res.send("Please use this route localhost:3000/api");

});


//GET all Data from API
app.get('/api', function (req, res) {
    
    Info.getInfo(function(err,data){
           
            if(err){
                //Handle Error
                throw err;
            }
            else{
                //Respond JSON
                res.send(JSON.stringify(data));
            }
    });
}); 




//Get single Data from API
app.get('/api/:_id',function(req,res){
   Info.getInfoById(req.params,function(err,data){
       
            if(err){
                //Handle Error
                throw err;
            }
            else{
                //Respond JSON
                res.send(JSON.stringify(data));
            }
   }); 
});




//Main localhost address 
app.listen(3000,'0.0.0.0',function(){
   console.log("Listening to port 3000"); 
});
