const express = require('express');
const router = express.Router(); 

const upublicController = require('../controllers/upublic.controller'); 

router.get("/", upublicController.getUpublics); 
router.post("/", upublicController.createUpublic);
router.get("/:id", upublicController.getUpublic);
router.put("/:id", upublicController.modifyUpublic); 
router.delete("/:id", upublicController.deleteUpublic); 

module.exports = router; 