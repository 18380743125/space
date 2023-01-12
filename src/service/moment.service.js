const connection = require("../app/database");

class MomentService {
  // 发表动态
  async create(content, user_id) {
    const statement = "INSERT INTO `moment`(content, user_id) VALUES(?, ?)";
    const [result] = await connection.execute(statement, [content, user_id]);
    return result;
  }

  // 查询动态列表
  async queryList(page = 1, size = 10) {
    const statement = `
      SELECT m.id id, m.content content, m.createAt createAt, m.updateAt updateAt, 
      (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) commentCount,
      (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) tagCount,
      JSON_OBJECT('id', u.id, 'name', u.name, 'createAt', u.createAt, 'updateAt', u.updateAt) user
      FROM moment m LEFT JOIN user u ON m.user_id = u.id LIMIT ? OFFSET ?
    `;
    const offset = (page - 1) * size;
    const [result] = await connection.execute(statement, [size, offset]);
    return result;
  }

  // 获取动态详情
  async queryById(momentId) {
    const statement = `
      SELECT 
        m.id id, m.content content, m.createAt createAt, m.updateAt updateAt, 
        JSON_OBJECT('id', u.id, 'name', u.name, 'createAt', u.createAt, 'updateAt', u.updateAt) user,
        (
          SELECT 
          JSON_ARRAYAGG(JSON_OBJECT('id', c.id, 'content', c.content, 'commentId', c.comment_id,
          'createAt', c.createAt, 'user', JSON_OBJECT('id', cu.id, 'name', cu.name, 'avatarUrl', cu.avatar_url)))
          FROM comment c
          LEFT JOIN user cu ON cu.id = c.user_id
          WHERE c.moment_id = m.id
        ) comments,
        (
          JSON_ARRAYAGG(JSON_OBJECT('id', l.id, 'name', l.name))
        ) labels
        FROM moment m 
        LEFT JOIN user u ON m.user_id = u.id
        LEFT JOIN moment_label ml ON ml.moment_id = m.id
        LEFT JOIN label l ON ml.label_id = l.id
        WHERE m.id = ?
        GROUP BY m.id
    `;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }

  // 修改动态
  async update(uid, momentId, content) {
    const statement = `UPDATE moment SET content = ? WHERE id = ? AND user_id = ?`;
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      uid,
    ]);
    return result;
  }

  // 删除动态
  async remove(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?`;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }

  // 判断动态上是否存在某标签
  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return !!result.length;
  }

  // 添加标签
  async addLabels(momentId, labelId) {
    const statement = `INSERT INTO moment_label(moment_id, label_id) VALUES(?, ?)`;
    await connection.execute(statement, [momentId, labelId]);
  }
}

module.exports = new MomentService();
