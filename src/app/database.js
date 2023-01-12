const mysql = require("mysql2");
const { SERVER_HOST } = require("../config/server");

const connectionPool = mysql.createPool({
  host: SERVER_HOST,
  port: "3306",
  database: "coderhub",
  user: "root",
  password: "Bright123.",
  connectionLimit: 5,
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
