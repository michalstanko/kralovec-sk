require('dotenv').config();

const express = require('express');
const expressNunjucks = require('express-nunjucks');

const isDev = process.env.NODE_ENV === 'development';

const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/templates');
const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

app.get('/', (req, res) => {
    // res.send('<h1 style="text-align: center; padding: 3em"><a href="https://twitter.com/kralovecczechia" style="font:36px monospace">#KralovecIsCzechia</a></h1>');
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`kralovec-sk app listening on port ${PORT}! Is development? => ${isDev}`);
});
