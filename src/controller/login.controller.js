const loginService = require("../service/login.Service");

class LoginController {
  // 登录
  signIn(ctx) {
    const { id, name } = ctx.user;
    const token = loginService.sign(id, name);
    ctx.body = {
      code: 0,
      data: { id, name, token },
    };
  }
}

module.exports = new LoginController();
