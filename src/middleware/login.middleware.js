const jwt = require("jsonwebtoken");
const userService = require("../service/user.service");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZED,
  TOKEN_EXPIRED,
} = require("../config/error");
const encrypt = require("../utils/hash-password");
const { PUBLIC_KEY } = require("../config/secret");

// 校验登录
async function verifyLogin(ctx, next) {
  const { name, password } = ctx.request.body;
  // 验证用户名和密码是否为空
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }
  // 查询用户
  const users = await userService.findUserByName(name);
  if (!users.length) {
    return ctx.app.emit("error", NAME_IS_NOT_EXISTS, ctx);
  }
  // 验证密码
  if (encrypt(password) !== users[0].password) {
    return ctx.app.emit("error", PASSWORD_IS_INCORRECT, ctx);
  }
  ctx.user = users[0];
  await next();
}

// 是否授权(校验 token)
async function verifyAuth(ctx, next) {
  const authorization = ctx.headers.authorization || " ";
  const token = authorization.replace("Bearer", "");
  let result = null;
  try {
    result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
  } catch (err) {
    if (err.name === TOKEN_EXPIRED)
      return ctx.app.emit("error", TOKEN_EXPIRED, ctx);
    else return ctx.app.emit("error", UNAUTHORIZED, ctx);
  }
  ctx.user = result;
  await next();
}

module.exports = {
  verifyLogin,
  verifyAuth,
};
