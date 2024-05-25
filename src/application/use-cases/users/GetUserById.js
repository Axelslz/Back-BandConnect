const UserRepository = require('../../../domain/repositories/UserRepository');

class GetUserById {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId) {
    return await this.userRepository.findById(userId);
  }
}

module.exports = GetUserById;
