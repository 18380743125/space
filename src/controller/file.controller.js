const fileService = require("../service/file.service");
const userService = require("../service/user.service");
const { SERVER_HOST, SERVER_PORT } = require("../config/server");

class FileController {
  async saveAvatar(ctx) {
    const { id: uid } = ctx.user;
    const { filename, mimetype, size } = ctx.file;
    // 将头像信息保存到数据库
    await fileService.saveAvatar(uid, filename, mimetype, size);
    const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${uid}`;
    // 更新头像地址
    await userService.updateAvatarUrlByUserId(avatarUrl, uid);
    ctx.body = {
      code: 0,
      message: "上传头像成功~",
      data: avatarUrl,
    };
  }
}

module.exports = new FileController();
