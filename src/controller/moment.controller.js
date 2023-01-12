const momentService = require("../service/moment.service");

class MomentController {
  // 发表动态
  async create(ctx) {
    const { id } = ctx.user;
    const { content } = ctx.request.body;
    const result = await momentService.create(content, id);
    ctx.body = {
      code: 0,
      message: "发表成功~",
      data: result,
    };
  }

  // 获取动态列表
  async list(ctx) {
    const { page, size } = ctx.query;
    const result = await momentService.queryList(page, size);
    ctx.body = {
      code: 0,
      data: result,
    };
  }

  // 获取动态详情
  async detail(ctx) {
    const { momentId } = ctx.params;
    const result = await momentService.queryById(momentId);
    ctx.body = {
      code: 0,
      data: result[0],
    };
  }

  // 修改动态
  async update(ctx) {
    const { id } = ctx.user;
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;
    let result = null;
    try {
      result = await momentService.update(id, momentId, content);
    } catch (err) {
      console.log(err);
    }
    ctx.body = {
      code: 0,
      message: "修改成功~",
      data: result,
    };
  }

  // 删除动态
  async remove(ctx) {
    const { momentId } = ctx.params;
    const result = await momentService.remove(momentId);
    ctx.body = {
      code: 0,
      message: "删除成功~",
      data: result,
    };
  }

  // 给动态添加标签
  async addLabels(ctx) {
    const { momentId } = ctx.params;
    const labels = ctx.labels;
    for (const label of labels) {
      const isExists = await momentService.hasLabel(momentId, label.id);
      if (!isExists) {
        await momentService.addLabels(momentId, label.id);
      }
    }
    ctx.body = {
      code: 0,
      message: "添加标签成功~",
    };
  }
}

module.exports = new MomentController();
