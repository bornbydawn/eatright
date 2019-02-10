var router = require('express').Router();
var passport = require("passport");

/* GET Google Authentication API. */
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function(req, res) {
        var token = req.user.token;
        res.redirect("http://localhost:3000?token=" + token);
    }
);


//each resource directory has a resourceRoutes.js file with the router ready to go
// require them and mount them to their respective routes below

router.use('/restaurant', require('./restaurant/restaurantRoutes'));
router.use('/customer', require('./customer/customerRoutes'));
router.use('/itemType', require('./item_type/itemTypeRoutes'));
router.use('/item', require('./item/itemRoutes'));
router.use('/order', require('./order/orderRoutes'));




module.exports = router;