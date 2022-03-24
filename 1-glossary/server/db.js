const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/glossary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gloSchema = new mongoose.Schema({
  keyword: String,
  meaning: String,
});

let Glos = mongoose.model("Glos", gloSchema);
var myglos = new Glos(
    {word_ID:001,
        keyword:'testing',
        meaning:'testing meaning'
    }
)
myglos.save();

//console.log(myglos)

// Glos.create(data,(err,result)=>{
//     if (err){
//         callback(err)
//     } else {
//         callback(null, result)
//     }
// })

// const glos = Glos.find((err,result)=>{
//     if(err){
//         console.log("err")
//         return
//     }
//     console.log("find>>>>",result)
// });
//console.log("glos>>>>",glos);

let save = (data, callback = () => {}) => {
  Glos.create(data, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

let retrieveall = (callback) =>{

Glos.find((err,glos)=>{
    if(err){
        callback(err)
        return;
    }
        callback(null,glos)
       // console.log("callback invoked")
})

// retrieveall(console.log)

}
module.exports.save = save;
module.exports.retrieveall = retrieveall;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
