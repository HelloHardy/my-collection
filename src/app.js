const express = require("express");
const { toyController } = require('./controllers');

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.get('/toy/:toyId', toyController.getToy);
app.post('/toy', toyController.postToy);

app.listen(3000, () => {
    console.log("Server running at port 3000");
});
