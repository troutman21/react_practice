const express = require('express');
const app = express();
const PORT = 3000;

app.get('/foo', (req, res) => {
  console.log('hit!');
  res.json({message: 'brooooo!'});
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT: ${PORT} ...`);
});