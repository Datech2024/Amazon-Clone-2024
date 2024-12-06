const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const stripe = require("stripe")(process.env.STRIPE_KEY)

const app = express()
app.use(cors({origin: true}))

app.use(express.json())

app.get("/",(req,res) =>{
    res.status(200).json({
        message:"Success"
    })
})


app.listen(5555,(err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Amazon server running on PORT:5555, http://localhost:5555")
    }
})