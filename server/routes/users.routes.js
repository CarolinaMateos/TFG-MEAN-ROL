const express = require('express');
const router = express.Router(); 

const userController = require('../controllers/user.controller'); 

router.get("/", userController.getUsers); 
router.post("/", userController.createUser);
router.get("/:id", userController.getUser);
router.put("/:id", userController.modifyUser); 
router.delete("/:id", userController.deleteUser); 

module.exports = router; 