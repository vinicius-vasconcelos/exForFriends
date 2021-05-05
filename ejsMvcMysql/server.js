const express = require('express')
const userRouter = require('./routers/userRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/assets/`));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.status(200).render('login'));
app.use('/users', userRouter);

app.listen(3000, () => console.log('Run 127.0.0.1:3000'));
