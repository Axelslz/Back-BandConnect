const UserRepository = require('../../../domain/repositories/UserRepository');
const User = require('../../../domain/entities/User');

class CreateUser {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userData) {
    const { name, email, password } = userData;
    const user = new User(null, name, email, password);
    return await this.userRepository.create(user);
  }
}

module.exports = CreateUser;
