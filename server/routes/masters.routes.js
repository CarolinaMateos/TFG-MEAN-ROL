const express = require('express');
const router = express.Router(); 

const masterController = require('../controllers/master.controller'); 

router.get("/", masterController.getMasters); 
router.post("/", masterController.createMaster);
router.get("/:id", masterController.getMaster);
router.put("/:id", masterController.modifyMaster); 
router.delete("/:id", masterController.deleteMaster); 

module.exports = router; 