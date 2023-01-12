const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const registerRouter = require("../router");
const handleError = require("../utils/handle-error");

const app = new Koa();

// 错误处理
app.on("error", handleError);

app.use(bodyParser());
// 注册路由
registerRouter(app);

module.exports = app;
