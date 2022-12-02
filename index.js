const express = require("express");
const app = express();
console.dir(app);

app.use(() => {
    console.log("New request");
})

app.listen(3000, ()=> {
    console.log("Listen to meeee");
})