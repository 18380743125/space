const connection = require("../app/database");

class PermissionService {
  // 操作该资源是否具有权限
  async checkPermission(uid, resourceId, resourceName) {
    const statement = `SELECT * FROM ${resourceName} WHERE id = ? AND user_id = ?`;
    const [result] = await connection.execute(statement, [resourceId, uid]);
    return !!result.length;
  }

  // 检查该资源是否存在
  async checkExists(resourceId, resourceName) {
    const statement = `SELECT * FROM ${resourceName} WHERE id = ?`;
    const [result] = await connection.execute(statement, [resourceId]);
    return !!result.length;
  }
}

module.exports = new PermissionService();
