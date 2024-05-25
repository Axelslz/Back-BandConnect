const CreateUser = require('../../application/use-cases/users/CreateUser');
const GetUserById = require('../../application/use-cases/users/GetUserById');
const UpdateUser = require('../../application/use-cases/users/UpdateUser');
const DeleteUser = require('../../application/use-cases/users/DeleteUser');
const GetAllUsers = require('../../application/use-cases/users/GetAllUsers');

const createUser = async (req, res) => {
  const createUser = new CreateUser();
  const user = await createUser.execute(req.body);
  res.status(201).json(user);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const getUserById = new GetUserById();
  const user = await getUserById.execute(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateUser = new UpdateUser();
  const user = await updateUser.execute(id, req.body);
  res.json({
    message: 'User updated successfully',
    user
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deleteUser = new DeleteUser();
  await deleteUser.execute(id);
  res.status(200).json({ message: 'User deleted successfully' });
};

const getAllUsers = async (req, res) => {
  const getAllUsers = new GetAllUsers();
  const users = await getAllUsers.execute();
  res.json(users);
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers
};
