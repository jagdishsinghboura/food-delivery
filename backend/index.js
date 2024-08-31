const express = require("express");
const Dishes = require("./db/dishesModel");
const User = require("./db/userModel");
const cors = require('cors')
const { connectDB } = require('./db/connectDb')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



connectDB()
// const products = [
//     { name: "Garlic Bread", price: 150, category: "starter", picture: "https://images.unsplash.com/photo-1534889196564-a6799df68403?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Bruschetta", price: 200, category: "starter", picture: "https://plus.unsplash.com/premium_photo-1690561081757-e2a49d3a3aad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Spring Rolls", price: 180, category: "starter", picture: "https://images.unsplash.com/photo-1568158879083-c42860933ed7?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Margherita Pizza", price: 350, category: "pizza", picture: "vhttps://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Pepperoni Pizza", price: 400, category: "pizza", picture: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "BBQ Chicken Pizza", price: 450, category: "pizza", picture: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Paneer Tikka Pizza", price: 380, category: "pizza", picture: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Veggie Supreme Pizza", price: 370, category: "pizza", picture: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Chicken Biryani", price: 300, category: "biryani", picture: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Mutton Biryani", price: 350, category: "biryani", picture: "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Veg Biryani", price: 250, category: "biryani", picture: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Prawn Biryani", price: 400, category: "biryani", picture: "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Paneer Biryani", price: 280, category: "biryani", picture: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Fish Biryani", price: 350, category: "biryani", picture: "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Cheese Pizza", price: 320, category: "pizza", picture: "https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Hawaiian Pizza", price: 380, category: "pizza", picture: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Buffalo Chicken Pizza", price: 420, category: "pizza", picture: "https://images.unsplash.com/photo-1528830984461-4d5c3cc1abf0?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { name: "Garlic Knots", price: 160, category: "starter", picture: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

// ];


app.get("/",(req, res)=>{

    return  res.json({
        message:'sg'
   });
})
app.get("/products/details", async (req, res) => {
    console.log("sdgknls",res.user);
    const products = await Dishes.find({})
    res.send(products)
})
app.post("/carts", async (req, res) => {
    const body = await req.body.cartId;

    const cart = await Dishes.find({ _id: { $in: body } })


    return res.send(cart);
})

app.post("/register", async (req, res) => {
    const { email, address, password, phoneNumber } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        password: hashPassword,
        address,
        phoneNumber,
    })

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    res.token = token,
        res.user = user;

    console.log(user)
    res.status(200).json({
        message: "succsess ful signup"
    })

})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
            res.token = token,
            res.user = user;

            console.log("kjkj");

            return res.status(200).send(token)

        }
    
        
    res.status(400).json({
        message: "user authenticate failed",
    })

})

app.listen(8000, () => {
    console.log('http://localhost:8000');
})