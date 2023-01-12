const fs = require("fs");
const path = require("path");
const userService = require("../service/user.service");
const { UPLOAD_AVATAR_PATH, DEFAULT_AVATAR_NAME } = require("../config/const");

class UserController {
  // 用户注册
  async create(ctx) {
    const user = ctx.request.body;
    const result = await userService.create(user);
    ctx.body = {
      message: "创建用户成功~",
      data: result,
    };
  }

  // 用户头像
  async showAvatarImage(ctx) {
    const { userId } = ctx.params;
    const avatarInfo = await userService.queryAvatarByUserId(userId);

    const { filename = DEFAULT_AVATAR_NAME, mimetype = "image/png" } =
      avatarInfo || {};
    const rs = fs.createReadStream(path.join(UPLOAD_AVATAR_PATH, filename));
    ctx.type = mimetype;
    ctx.body = rs;
  }
}

module.exports = new UserController();
