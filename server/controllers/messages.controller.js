const Messages = require("../models/messages");
const messagesController = {};

messagesController.getMessages = async (req, res, next) => {
  const masters = await Messages.find();
  res.json(masters);
};

messagesController.createMessage = async (req, res) => {
  const master = new Messages(req.body);
  await master.save();
  res.json({
    status: "Master guardado",
    data: master
  });
};

messagesController.getMessage = async (req, res, next) => {
  const master = await Messages.findById(req.params.id);
  res.json({
    status: "Saved",
    Usuario: master
  });
};

messagesController.modifyMessage = async (req, res) => {
  const { id } = req.params;
  const master = {
    id_user: req.body.id_user,
    id_character: req.body.id_character,
    id_master: req.body.id_master,
    content: req.body.content
  };

  await Messages.findByIdAndUpdate(id, { $set: master }, { new: true });

  res.json({
    status: "Modified",
    modification: master
  });
};

messagesController.deleteMessage = async (req, res) => {
  await Messages.findByIdAndDelete(req.params.id);
  res.json({
    'status': "Deleted",
    'master': req.params.id
  });
};

module.exports = messagesController;
