const connection = require("../app/database");

class CommentService {
  // 创建评论
  async create(id, content, momentId) {
    const statement = `INSERT INTO comment(content, moment_id, user_id) VALUES(?, ?, ?)`;
    const result = await connection.execute(statement, [content, momentId, id]);
    return result;
  }

  // 回复评论
  async reply(id, content, momentId, commentId) {
    const statement = `INSERT INTO comment(content, moment_id, user_id, comment_id) VALUES(?, ?, ?, ?)`;
    const result = await connection.execute(statement, [
      content,
      momentId,
      id,
      commentId,
    ]);
    return result;
  }

  // 删除评论
  async remove(uid, cid) {
    const statement = `DELETE FROM COMMENT WHERE id = ? AND user_id = ?`;
    const result = await connection.execute(statement, [cid, uid]);
    return result;
  }
}

module.exports = new CommentService();
