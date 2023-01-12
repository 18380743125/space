const path = require('path');
const multer = require('@koa/multer');

const handleAvatar = multer({
  dest: path.join(__dirname, '../../upload/avatar')
});

module.exports = {
  handleAvatar
};
