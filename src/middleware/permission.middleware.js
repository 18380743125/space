const permissionService = require("../service/permission.service");
const {
  RESOURCE_NOT_FOUND,
  OPERATION_NOT_ALLOWED,
} = require("../config/error");

// 检查用户操作资源是否具有权限
async function checkPermission(ctx, next) {
  const { id } = ctx.user;
  const keyName = Object.keys(ctx.params)[0];
  const resourceId = ctx.params[keyName];
  const resourceName = keyName.replace("Id", "");
  // 该资源是否存在
  const isExists = await permissionService.checkExists(
    resourceId,
    resourceName
  );
  if (!isExists) {
    return ctx.app.emit("error", RESOURCE_NOT_FOUND, ctx);
  }
  // 是否允许操作
  const isPermission = await permissionService.checkPermission(
    id,
    resourceId,
    resourceName
  );
  if (!isPermission) {
    return ctx.app.emit("error", OPERATION_NOT_ALLOWED, ctx);
  }
  await next();
}

module.exports = {
  checkPermission,
};
