const mongoose =require("mongoose")


const dishesSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    picture:String,
})

const Dishes = mongoose.model("Dishes", dishesSchema);

module.exports =Dishes;