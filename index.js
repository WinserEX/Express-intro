const express = require("express");
const app = express();
console.dir(app);

let test = 'request';

//Allows you to work with requests and responses
// app.use((req, res) => {
//     console.log("New request");
//     res.send(`<h1>${test}<h1>`);
// })

//Sets response for a specific route
app.get('/', (req, res) => {
    res.send("Home");
 })

 app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post ID: ${postId} on ${subreddit}</h1>`);
 })

app.get('/cats', (req, res) => {
   res.send("Meow");
})

app.get('/dogs', (req, res) => {
    res.send("woof");
 })

 //Post request
 app.post('/cats', (req, res) => {
    res.send("Rawwwr");
 })
//Requests a query string from url
 app.get('/search', (req, res) => {
   const { q } = req.query;
   if(!q) {
      res.send(`<p>Nothing found if nothing searched, dude<p>`)
   }
   res.send(`<h1>Your query is ${q}</h1>`);
 })

 //Catches wrong paths, always goes last
 app.get('*', (req, res) => {
    res.send("I don't know that path");
 })

// /cats => meow
// /dogs => woof
// '/'

//Starts the server in the desired port
app.listen(3000, ()=> {
    console.log("Listen to meeee");
})