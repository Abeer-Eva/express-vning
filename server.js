const { req, res} = require('express');
const express = require('express');
const guestbookGet = require('./guestbook.js')
const app =express();
const PORT = 1337 ;


app.get('/', (req, res) => {

         res.send('Hello from server');
     });
   
     
app.get('/guestbook', guestbookGet);





app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
} )