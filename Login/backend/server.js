const express =require("express");
const cors =require("cors");
const authRouter =require("./router/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth/', authRouter);

app.all('*', (req, res) =>{
    res.status(404).send({message: 'Page not found'})
})


module.exports =app;
