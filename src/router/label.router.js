const KoaRouter = require("@koa/router");
const labelController = require("../controller/label.controller");
const loginMiddleware = require("../middleware/login.middleware");

const labelRouter = new KoaRouter({ prefix: "/label" });

// 创建标签
labelRouter.post("/", loginMiddleware.verifyAuth, labelController.create);

// 查询标签列表
labelRouter.get('/', labelController.list);

module.exports = labelRouter;
