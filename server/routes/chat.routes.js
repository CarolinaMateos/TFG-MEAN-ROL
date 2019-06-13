const express = require('express');
const router = express.Router(); 

const chatController = require('../controllers/chat.controller'); 

router.get("/", chatController.getChats); 
router.post("/", chatController.createChat);
router.get("/:id", chatController.getChats);
router.put("/:id", chatController.modifyChat); 
router.delete("/:id", chatController.deleteChat); 

module.exports = router; 