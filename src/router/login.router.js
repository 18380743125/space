const KoaRouter = require("@koa/router");
const loginController = require("../controller/login.controller");
const loginMiddleware = require("../middleware/login.middleware");

const loginRouter = new KoaRouter({ prefix: "/login" });

loginRouter.post("/", loginMiddleware.verifyLogin, loginController.signIn);

module.exports = loginRouter;
