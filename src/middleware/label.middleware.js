const labelService = require("../service/label.service");

// 检查标签是否存在, 不存在则创建
async function verifyLabelExists(ctx, next) {
  const { labels } = ctx.request.body;
  const newLabels = [];
  for (const name of labels) {
    const result = await labelService.queryLabelByName(name);
    const labelObj = { name };
    if (result) {
      labelObj.id = result.id;
    } else {
      // 不存在则创建标签
      const insertResult = await labelService.create(name);
      labelObj.id = insertResult.insertId;
    }
    newLabels.push(labelObj);
  }
  ctx.labels = newLabels;
  await next();
}

module.exports = {
  verifyLabelExists,
};
