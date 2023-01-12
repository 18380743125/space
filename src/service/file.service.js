const connection = require("../app/database");

class FileService {
  async saveAvatar(uid, filename, mimetype, size) {
    const statement = `INSERT INTO avatar(filename, mimetype, size, user_id) VALUES(?, ?, ?, ?)`;
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      uid,
    ]);
    return result;
  }
}

module.exports = new FileService();
