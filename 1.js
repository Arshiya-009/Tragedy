const express = require ("express") ; 
const app = express () ; 

 app.get ('/' , (req, res) => {
    res.send ('HELLO HElli') ; 
 }); 

 app.listen (1147 ,() => console.log ('a')) ;