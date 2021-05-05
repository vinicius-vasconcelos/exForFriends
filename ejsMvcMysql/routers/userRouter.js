const router = require('express').Router();
const userCtr = require('../controllers/userCtr');

router.get('/showViewRegister', userCtr.showViewRegister);
router.get('/', userCtr.getAll);
router.get('/:email', userCtr.getByEmail);
router.post('/', userCtr.create);

module.exports = router;
