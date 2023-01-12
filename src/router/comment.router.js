const KoaRouter = require("@koa/router");
const commentController = require("../controller/comment.controller");
const loginMiddleware = require("../middleware/login.middleware");
const permissionMiddleware = require("../middleware/permission.middleware");

const commentRouter = new KoaRouter({ prefix: "/comment" });

// 创建评论
commentRouter.post("/", loginMiddleware.verifyAuth, commentController.create);

// 回复评论
commentRouter.post(
  "/reply",
  loginMiddleware.verifyAuth,
  commentController.reply
);

// 删除评论
commentRouter.delete(
  "/:commentId",
  loginMiddleware.verifyAuth,
  permissionMiddleware.checkPermission,
  commentController.remove
);

module.exports = commentRouter;
