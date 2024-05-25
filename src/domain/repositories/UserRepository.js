const connection = require('../../database');
const User = require('../entities/User');

class UserRepository {
  async create(user) {
    const [result] = await connection.promise().query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [user.name, user.email, user.password]
    );
    return new User(result.insertId, user.name, user.email, user.password);
  }

  async findById(id) {
    const [rows] = await connection.promise().query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) return null;
    const { name, email, password } = rows[0];
    return new User(id, name, email, password);
  }

  async update(user) {
    await connection.promise().query(
      'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
      [user.name, user.email, user.password, user.id]
    );
    return user;
  }

  async delete(id) {
    await connection.promise().query('DELETE FROM users WHERE id = ?', [id]);
  }

  async findAll() {
    const [rows] = await connection.promise().query('SELECT * FROM users');
    return rows.map(row => new User(row.id, row.name, row.email, row.password));
  }
}

module.exports = UserRepository;

