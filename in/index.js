import restify from "restify";
import passport from "passport-restify";
import {BasicStrategy} from "passport-http";

let API = {};

API._authenticate = function(username, password, done) {
    /*User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });*/
    if(username == "potatoe" && password == "potatoe") {
      return done(null, "potatoe");
    }
    else {
      return done(null, false);
    }
  };

API.root = (req, res, next) => {
  res.send({
    ok: false
  });
  return next();
}

API.hello = (req, res, next) => {
  res.send({
    ok: true,
    name: req.params.name
  });
  return next();
};

var server = restify.createServer();
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(passport.initialize());
passport.use(new BasicStrategy({ session: false }, API._authenticate));

server.get("/", API.root);
server.get("/user/:name", passport.authenticate("basic", { session: false }), API.hello);

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});
