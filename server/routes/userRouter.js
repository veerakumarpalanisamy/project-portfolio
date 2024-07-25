const router = require("express").Router()
const {test, signupController, signinController, updateUser, deleteUser} = require("./controllers/userController")


router.get("/", test)
router.post("/signup", signupController)
router.post("/signin", signinController)
router.put("/update/:id", updateUser)
router.delete("/delete/:id", deleteUser)

module.exports = router