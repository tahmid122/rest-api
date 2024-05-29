const express = require("express");
const {
  allUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");
const router = express.Router();

//users route
router.get("/", allUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
