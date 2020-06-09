const jwt = require("jsonwebtoken");
const secret = "second secret key";

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if(err) {
            console.log(req.cookies);
            console.log(jwt.decode(req.cookies.usertoken, secret));
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}