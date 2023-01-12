const mysql = require("mysql2");
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_POOL_LIMIT
} = require("../config/server");

const connectionPool = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  connectionLimit: MYSQL_POOL_LIMIT,
});

// 连接结果
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("mysql 获取连接失败~", err);
    return;
  }
  connection.connect((err) => {
    if (err) console.log("mysql 数据库连接失败~", err);
    else console.log("mysql 数据库连接成功, 可以进行操作~");
  });
});

const connection = connectionPool.promise();

module.exports = connection;
