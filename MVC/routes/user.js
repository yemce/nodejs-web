const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/view/anc/:id",userController.viewAnc);
router.get("/",userController.homePage);

module.exports = router;