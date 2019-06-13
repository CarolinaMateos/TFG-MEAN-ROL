const express = require('express');
const router = express.Router(); 

const gameController = require('../controllers/game.controller'); 

router.get("/", gameController.getGames); 
router.post("/", gameController.createGame);
router.get("/:id", gameController.getGame);
router.put("/:id", gameController.modifyGame); 
router.delete("/:id", gameController.deleteGame); 

module.exports = router; 