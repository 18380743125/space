const connection = require("../app/database");

class LabelService {
  // 创建标签
  async create(name) {
    const statement = `INSERT INTO label(name) VALUE(?)`;
    const [result] = await connection.execute(statement, [name]);
    return result;
  }

  // 获取标签列表
  async list(page = 1, size = 20) {
    const statement = `SELECT * FROM label LIMIT ? OFFSET ?`;
    const [result] = await connection.execute(statement, [
      size,
      (page - 1) * size,
    ]);
    return result;
  }

  // 根据名称查询 label
  async queryLabelByName(name) {
    const statement = `SELECT * FROM label WHERE name = ?`;
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new LabelService();
