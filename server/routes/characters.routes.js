const express = require('express');
const router = express.Router(); 

const characterController = require('../controllers/character.controller'); 

router.get("/", characterController.getCharacters); 
router.post("/", characterController.createCharacter);
router.get("/:id", characterController.getCharacter);
router.put("/:id", characterController.modifyCharacter); 
router.delete("/:id", characterController.deleteCharacter); 

module.exports = router; 