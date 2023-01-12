const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZED,
  TOKEN_EXPIRED,
  RESOURCE_NOT_FOUND,
  OPERATION_NOT_ALLOWED,
} = require("../config/error");

function handleError(error, ctx) {
  let code = 0;
  let message = "";
  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001;
      message = "用户名或密码不能为空~";
      break;
    case NAME_IS_ALREADY_EXISTS:
      code = -1002;
      message = "用户名已存在~";
      break;
    case NAME_IS_NOT_EXISTS:
      code = -1003;
      message = "用户不存在~";
      break;
    case PASSWORD_IS_INCORRECT:
      code = -1004;
      message = "密码错误~";
      break;
    case UNAUTHORIZED:
      code = -1005;
      message = "用户未授权~";
      break;
    case TOKEN_EXPIRED:
      code = -1006;
      message = "用户登录过期~";
      break;
    case RESOURCE_NOT_FOUND:
      code = -1007;
      message = "该资源不存在~";
      break;
    case OPERATION_NOT_ALLOWED:
      code = -2001;
      message = "该用户没有操作该资源的权限~";
      break;
    default:
  }
  ctx.body = {
    code,
    message,
  };
}

module.exports = handleError;
