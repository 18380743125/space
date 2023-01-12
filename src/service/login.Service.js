const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../config/secret");
const { TOKEN_EXPIRES } = require("../config/const");

class LoginService {
  // 签发 token
  sign(id, name) {
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: TOKEN_EXPIRES,
      algorithm: "RS256",
    });
    return token;
  }
}

module.exports = new LoginService();
