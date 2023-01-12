const crypto = require("crypto");
const { PASSWORD_SECRET } = require("../config/const");

function encrypt(password) {
  const hash = crypto.createHmac("sha1", PASSWORD_SECRET);
  return hash.update(password).digest("hex");
}

module.exports = encrypt;
