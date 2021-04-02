const express = require('express');

const app = express();

app.set('viwe engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.get('/', (_req, res) => res.status(200).render('index', { page: { title: 'Login' } }));

app.listen(3000, () => console.log('Run http://localhost:3000'));
