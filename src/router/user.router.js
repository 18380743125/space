const KoaRouter = require("@koa/router");
const userController = require("../controller/user.controller");
const userMiddleware = require("../middleware/user.middleware");

const userRouter = new KoaRouter({ prefix: "/users" });

// 用户注册
userRouter.post(
  "/",
  userMiddleware.verifyUser,
  userMiddleware.handlePassword,
  userController.create
);

// 用户头像
userRouter.get('/avatar/:userId', userController.showAvatarImage);

module.exports = userRouter;
