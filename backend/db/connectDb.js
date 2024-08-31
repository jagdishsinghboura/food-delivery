
const mongoose = require('mongoose')

exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/foody").then((res)=>console.log("conntion success")).catch(()=>console.log("no connection"))
  } catch (error) {
    console.log("eror in db")
  }
}
