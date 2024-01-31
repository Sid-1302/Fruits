/*
const express=require('express')
const mongoose=require('mongoose')

const app=express()

mongoose.connect('mongodb://localhost:27017/fruits').then(()=>console.log('Connection successfull'))
.catch((err)=>console.log(err));


const playlistSchema= new mongoose.Schema({
    name:String,
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now 
    }

})

const PlayList = new mongoose.model("Playlist",playlistSchema);

const reactPlaylist=new PlayList({
    name:'React',
    ctype:'Front End',
    videos:3,
    author:'Technical',
    active:true 
})

reactPlaylist.save();

app.listen(3000,()=>{
    console.log('Server is running on port 3000')  

})  
*/

const mongoose=require('mongoose');
const express=require('express');
const app=express();

mongoose.set('strictQuery',false)
mongoose.connect("mongodb://localhost:27017/people")

const peopleSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:[true,'No Name , Hmmmmm']     
    },
    age:{
        type:Number,
        min:1,
        max:90 
        
    }
});

const Person=new mongoose.model('Person',peopleSchema);

const person=new Person({
    // name:'Cameron',
    age:25
});

const person2=new Person({
    name:'Nandu',
    age:17
})

// person.save()
Person.find()
.then(function (models) {
  console.log(models);
})
.catch(function (err) {
  console.log(err);
});

// Person.deleteMany({name:'Nothing'}).then();
Person.updateOne({age:51},{name:'Cuddy'}).then();
 

 /*
 function(err){
if(err) console.log('Error');
else console.log('Successful..')
 });
 */



/*
app.get("/", async (req, res) => {
    try {
      const articles = await Person.find({ });
    //   res.send(articles);
      articles.forEach(function(person){
          console.log(person.name," is ",person.age," years old")
      });
       } catch (err) {
      console.log(err);
    }
  });
*/

 app.listen(3000,function(){
    console.log('Server started..');
 }) ;