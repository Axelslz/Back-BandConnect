const UserRepository = require('../../../domain/repositories/UserRepository');

class DeleteUser {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId) {
    await this.userRepository.delete(userId);
  }
}

module.exports = DeleteUser;
