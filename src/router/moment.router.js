const KoaRouter = require("@koa/router");
const momentController = require("../controller/moment.controller");
const loginMiddleware = require("../middleware/login.middleware");
const permissionMiddleware = require("../middleware/permission.middleware");
const labelMiddleware = require("../middleware/label.middleware");

const momentRouter = new KoaRouter({ prefix: "/moment" });

// 发表动态
momentRouter.post("/", loginMiddleware.verifyAuth, momentController.create);

// 获取动态
momentRouter.get("/", loginMiddleware.verifyAuth, momentController.list);

// 获取动态详情
momentRouter.get(
  "/:momentId",
  loginMiddleware.verifyAuth,
  momentController.detail
);

// 修改动态
momentRouter.patch(
  "/:momentId",
  loginMiddleware.verifyAuth,
  permissionMiddleware.checkPermission,
  momentController.update
);

// 删除动态
momentRouter.delete(
  "/:momentId",
  loginMiddleware.verifyAuth,
  permissionMiddleware.checkPermission,
  momentController.remove
);

// 给动态添加标签
momentRouter.post(
  "/:momentId/labels",
  loginMiddleware.verifyAuth,
  permissionMiddleware.checkPermission,
  labelMiddleware.verifyLabelExists,
  momentController.addLabels
);

module.exports = momentRouter;
