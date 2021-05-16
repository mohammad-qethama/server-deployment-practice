'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
// const PORT = process.env.PORT || 4000;
const errorHandler500 = require('./error-handler/500.js');
const error404Handler = require('./error-handler/404.js');

app.get('/',(req,res)=>{
  res.send('Welcome Home');
});


app.get('/bad',(req,res)=>{
//   res.status(500).send('Error 500: Internal Server Error ');
  throw new Error('Something went wrong');

});



// app.get('*',(req,res)=>{
//   res.status(404).send('Error 404: Not Found');

// });
app.use('*',error404Handler);
app.use(errorHandler500);

function start(PORT){
  app.listen(PORT,()=>{
    console.log(`Listining on ${PORT}`);
  });
}
module.exports = {
  app:app,
  start:start
};
