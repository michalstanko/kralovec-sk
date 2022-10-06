const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1 style="text-align: center; padding: 3em"><a href="https://twitter.com/kralovecczechia" style="font:36px monospace">#KralovecIsCzechia</a></h1>');
});

app.listen(PORT, () => {
    console.log(`kralovec-sk app listening on port ${PORT}!`);
});
