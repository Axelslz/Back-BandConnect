const express = require('express');
const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers
} = require('../controllers/UserController');

const router = express.Router();

router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/users', getAllUsers);

module.exports = router;
