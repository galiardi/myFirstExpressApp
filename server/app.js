const express = require('express');
const cors = require('cors');

const app = express();
const port = 7000;
let siteRequests = 0
/*
app.use((req, res, next) => {
  siteRequests++;
  console.log('siteRequests: ', siteRequests);
  next();
})
*/
app.use(cors({ origin: true, credentials: true }));


app.route('/')
  .get((req, res) => {
    console.log('get request');
    res.send('home page');
  })
  .post((req,res) => {
    console.log('post request');
    res.send({"res": "hola"});
  })

app.listen(port, () => {
  console.log('Server listening on port', port);
});