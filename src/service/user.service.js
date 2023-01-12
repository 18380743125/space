const connection = require("../app/database");

class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `user`(name, password) VALUES(?, ?)";
    const [result] = await connection.execute(statement, [name, password]);
    return result;
  }

  async findUserByName(name) {
    const statement = "SELECT * FROM `user` WHERE name = ?";
    const [values] = await connection.execute(statement, [name]);
    return values;
  }

  async queryAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?`;
    const [result] = await connection.execute(statement, [userId]);
    return result.pop();
  }

  // 更新用户头像地址
  async updateAvatarUrlByUserId(avatarUrl, userId) {
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?`;
    const [result] = await connection.execute(statement, [avatarUrl, userId]);
    return result;
  }
}

module.exports = new UserService();
