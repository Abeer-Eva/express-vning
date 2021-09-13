
const express = require('express');
const app =express();
const guestbookGet= require ('./routes/gusetbook')
const PORT = 1337 ;

app.use( express.static(__dirname + '/public') )
app.use( express.json() )

app.get('/', (req, res) => {

         res.send('Hello from server');
     });
   
     

app.get('/guestbook', guestbookGet)
 



app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
} )