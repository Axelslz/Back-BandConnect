const UserRepository = require('../../../domain/repositories/UserRepository');
const User = require('../../../domain/entities/User');

class UpdateUser {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId, userData) {
    const { name, email, password } = userData;
    const user = new User(userId, name, email, password);
    return await this.userRepository.update(user);
  }
}

module.exports = UpdateUser;
