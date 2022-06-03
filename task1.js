const express = require('express');
const app = express();
const arr= [{id:"1",name:"Ruqiyye",age:"19"},{id:"2",name:"Sarigül",age:"20"},{id:"1",name:"Fidan",age:"19"}]

app.get('/get', function (req, res) {
  res.send(arr);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});