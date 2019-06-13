const express = require('express');
const router = express.Router(); 

const blogpublicController = require('../controllers/blog-publications.controller'); 

router.get("/", blogpublicController.getBlogpublics); 
router.post("/", blogpublicController.createBlogpublic);
router.get("/:id", blogpublicController.getBlogpublic);
router.put("/:id", blogpublicController.modifyBlogpublic); 
router.delete("/:id", blogpublicController.deleteBlogpublic); 

module.exports = router; 