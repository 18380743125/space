const userService = require("../service/user.service");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
} = require("../config/error");
const encrypt = require("../utils/hash-password");

// 验证用户名和密码
async function verifyUser(ctx, next) {
  const { name, password } = ctx.request.body;
  // 验证用户名和密码是否为空
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  // 判断 name 是否已存在
  const users = await userService.findUserByName(name);
  if (users.length) {
    return ctx.app.emit("error", NAME_IS_ALREADY_EXISTS, ctx);
  }
  await next();
}

// 加密
async function handlePassword(ctx, next) {
  const { password } = ctx.request.body;
  ctx.request.body.password = encrypt(password);
  await next();
}

module.exports = {
  verifyUser,
  handlePassword,
};
