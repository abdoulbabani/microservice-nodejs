const cruduser = require("../controllers/crudUserController");
const router = require("express").Router();

router.post("/register", cruduser.addUser);

router.post("/getAllUsers", cruduser.getAllUsers);

router.post("/signin", cruduser.signin);

router.get("/:id", cruduser.getOneUser);

router.put("/:id", cruduser.UpdateUser);

router.delete("/:id", cruduser.deleteUser);
router.post("/refrechtoken", cruduser.refrechtoken);

module.exports = router;
