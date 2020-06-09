const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/users", UserController.register);
    app.post("/api/users/login", UserController.login);
    app.get("/api/users", authenticate, UserController.findAllUsers);
    app.get("/api/users/logout", UserController.logout);
}