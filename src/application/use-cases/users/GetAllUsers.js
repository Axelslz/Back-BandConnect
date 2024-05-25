const UserRepository = require('../../../domain/repositories/UserRepository');

class GetAllUsers {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute() {
    return await this.userRepository.findAll();
  }
}

module.exports = GetAllUsers;
