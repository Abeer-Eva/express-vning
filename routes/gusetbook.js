let visit =0;

const guestbookGet = (req, res) => {
 visit++;
 res.send('Du är besökare nr ' + visit );
}


module.exports=guestbookGet
