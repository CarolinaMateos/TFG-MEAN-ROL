const Blogpublic = require("../models/blog-publics");
const blogpublicController = {};

blogpublicController.getBlogpublics = async (req, res, next) => {
  const upublics = await Blogpublic.find();
  res.json(upublics);
};

blogpublicController.createBlogpublic = async (req, res) => {
  const upublic = new Blogpublic(req.body);
  await upublic.save();
  res.json({
    status: "Saved",
    data: upublic
  });
};

blogpublicController.getBlogpublic = async (req, res, next) => {
  const upublic = await Blogpublic.findById(req.params.id);
  res.json({
    status: "received",
    Usuario: upublic
  });
};

blogpublicController.modifyBlogpublic = async (req, res) => {
  const { id } = req.params;
  const upublic = {
    content: req.body.content,
  };

  await Blogpublic.findByIdAndUpdate(id, { $set: upublic }, { new: true });

  res.json({
    status: "Modified",
    modification: upublic
  });
};

blogpublicController.deleteBlogpublic = async (req, res) => {
  await Blogpublic.findByIdAndDelete(req.params.id);
  res.json({
    status: "Deleted",
    user: req.params.id
  });
};

module.exports = blogpublicController;
