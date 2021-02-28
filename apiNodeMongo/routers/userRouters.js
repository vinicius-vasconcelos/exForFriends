const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.add);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
// router.put('/:id');
// router.delete('/:id');

module.exports = router;
