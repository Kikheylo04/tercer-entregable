const { Router } = require("express");
const {
  createUSer,
  listUser,
  detailUser,
} = require("../controllers/userControllers");
const router = Router();

router.get("/api/v1/users", listUser);
router.get("/api/v1/users/:id", detailUser);
router.post("/api/v1/users", createUSer);

module.exports = router;
