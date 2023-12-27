const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./congig/db")
dotenv.config();
connectDB();
const app = express();



// API
app.get('/', (req, res) => {
    res.send("Api is running");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id',(req,res)=>{
// console.log(req.params.id);//taking id variable
const singleChat = chats.find((c)=>c.id === req.params.id);
res.send(chats);

});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`port is started on ${PORT} succesfully`);
    //use string literals
});
