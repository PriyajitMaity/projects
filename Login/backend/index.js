const mongoose =require("mongoose");
const app =require("./server");
const env =require("dotenv");
env.config();

mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log("Database connected to MongoDB")
}).catch((err) => console.log(err));

app.listen(process.env.PORT, () =>{
    console.log(`server is running on ${process.env.PORT}`)
})

