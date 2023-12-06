const { Router } = require("express");
const {
  getUsers,
  postUser,
  deleteUser,
  putUser,
  verifyUser,
  loginUser,
} = require("../controllers/user.controllers.js");
const auth = require("../middlewares/Auth");

const router = Router();

//RUTAS
router.get("/", getUsers);

router.post("/agregar", postUser);

router.get("/verificar", auth, verifyUser);

router.put("/actualizar", putUser);

router.delete("/borrar", auth, deleteUser);

router.post("/login", loginUser);

module.exports = router;
