const express = require('express');
const userRouters = require('./routers/userRouters')

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.json({ 
  users: '/users',
  product: '/product',
}));

app.use('/user', userRouters);

app.listen(3000, () => console.log('Server Run 127.0.0.1:3000'));
