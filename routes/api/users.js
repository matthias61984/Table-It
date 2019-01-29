const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/").post(userController.create);

//add login before usernmae
router.route("/login/:username").get(userController.findUserbyUsername);

router.route("/:id")
.get(userController.findById)
.put(userController.update)
.delete(userController.remove);

module.exports = router;
