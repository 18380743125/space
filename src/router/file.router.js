const KoaRouter = require("@koa/router");
const fileController = require("../controller/file.controller");
const loginMiddleware = require("../middleware/login.middleware");
const fileMiddleware = require("../middleware/file.middleware");

const fileRouter = new KoaRouter({ prefix: "/file" });

fileRouter.post(
  "/avatar",
  loginMiddleware.verifyAuth,
  fileMiddleware.handleAvatar.single("avatar"),
  fileController.saveAvatar
);

module.exports = fileRouter;
