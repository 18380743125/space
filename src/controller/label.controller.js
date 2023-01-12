const labelService = require("../service/label.service.js");

class LabelController {
  // 创建标签
  async create(ctx) {
    const { name } = ctx.request.body;
    const result = await labelService.create(name);
    ctx.body = {
      code: 0,
      message: "创建成功~",
      data: result,
    };
  }
  // 查询标签列表
  async list(ctx) {
    const { page, size } = ctx.query;
    const result = await labelService.list(page, size);
    ctx.body = {
      code: 0,
      data: result,
    };
  }
}

module.exports = new LabelController();
