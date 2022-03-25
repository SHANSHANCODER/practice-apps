const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/glossary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gloSchema = new mongoose.Schema({
  keyword: {type:String, unique:true, uppercase:true},
  meaning: String,
});

 let Glos = mongoose.model("Glos", gloSchema);
// var myglos = new Glos(
//     {word_ID:001,
//         keyword:'testing',
//         meaning:'testing meaning'
//     }
// )
// myglos.save();

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
let deleteGlossary = (word,callback)=>{
  Glos.deleteOne(word,(err,result)=>{
    if (err){
      callback(err)
    } else {
      console.log(word);
      callback(null,result)
    }
  })
}

// let updateGlossary = (word, callback)=> {
//   Glos.findByIdAndUpdate(word._id,word.update, function(err, result){
//     if(err){
//         callback(err)
//     }
//     else{
//         callback(null,result)
//     }

// }



module.exports.save = save;
module.exports.retrieveall = retrieveall;
module.exports.deleteGlossary=deleteGlossary;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
