const commentService = require("../service/comment.service");

class CommentController {
  // 创建评论
  async create(ctx) {
    const { id } = ctx.user;
    const { content, momentId } = ctx.request.body;
    const result = await commentService.create(id, content, momentId);
    ctx.body = {
      code: 0,
      message: "发表成功~",
      data: result,
    };
  }

  // 回复评论
  async reply(ctx) {
    const { id } = ctx.user;
    const { content, momentId, commentId } = ctx.request.body;
    const result = await commentService.reply(id, content, momentId, commentId);
    ctx.body = {
      code: 0,
      message: "回复成功~",
      data: result,
    };
  }

  // 删除评论
  async remove(ctx) {
    const { id } = ctx.user;
    const { commentId } = ctx.params;
    const result = await commentService.remove(id, commentId);
    ctx.body = {
      code: 0,
      message: "删除成功~",
      data: result,
    };
  }


}

module.exports = new CommentController();
