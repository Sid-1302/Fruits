const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/fruitsDB')
const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    rating:Number,
    review:String 
});

const peopleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:[1,'Too Young'],
        max:[100,'Too Old']
    },
    fruit:fruitSchema
});

const Fruit=new mongoose.model("Fruit",fruitSchema);
const Person=new mongoose.model('Person',peopleSchema);
const frut=new Fruit({
    name:'Apple' ,
    rating:9,
    review:'No Doctor'
});

// frut.save();

const person=new Person({
    name:'House',
    age:55
});
const person2=new Person({
    name:'Chase',
    age:38
});
const person3=new Person({
    name:'Cameroon',
    age:35
});

// Person.deleteOne({name:'Chase'}).then();









