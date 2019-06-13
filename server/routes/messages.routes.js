const express = require('express');
const router = express.Router(); 

const messagesController = require('../controllers/messages.controller'); 

router.get("/", messagesController.getMessages); 
router.post("/", messagesController.createMessage);
router.get("/:id", messagesController.getMessage);
router.put("/:id", messagesController.modifyMessage); 
router.delete("/:id", messagesController.deleteMessage); 

module.exports = router; 