const path = require("path");

// 密码加密密钥
const PASSWORD_SECRET = "bright";

// token 有效期(一天)
const TOKEN_EXPIRES = 60 * 60 * 24;

// 头像上传地址
const UPLOAD_AVATAR_PATH = path.join(__dirname, "../../upload/avatar");

// 默认头像名称
const DEFAULT_AVATAR_NAME = "default";

module.exports = {
  PASSWORD_SECRET,
  TOKEN_EXPIRES,
  UPLOAD_AVATAR_PATH,
  DEFAULT_AVATAR_NAME,
};
