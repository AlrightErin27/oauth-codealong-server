//This Controller Authenticates Requests From Google//
const router = require("express").Router();
const googlePassport = require("../config/googlePpConfig");

//This the route the client hits to get redirected to Google
//Once at Goggle, they will login
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//This route
router.get(
  "/google/callback",
  googlePassport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
