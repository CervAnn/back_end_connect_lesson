const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Lil Debbie Snacks';

app.get('/', (request, response) => {
  response.send(app.locals.treats);
});

app.locals.treats = 
[
  { name: "Banana Marshmallow Pies"},
  { name: "Chocolate Marshmallow Pies"},
  { name: "Jelly Creme Pies"},
  { name: "Raisin Creme Pies"},
  { name: "Chocolate Chip Creme Pies"},
  { name: "Oatmeal Creme Pies"},
  { name: "Fudge Rounds"},
  { name: "Star Crunch® Cosmic® Cookies"}
]

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});