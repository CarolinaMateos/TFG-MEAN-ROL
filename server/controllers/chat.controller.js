const Chat = require("../models/chat-rooms");
const chatController = {};

chatController.getChats = async (req, res, next) => {
  const chats = await Chat.find();
  res.json(chats);
};

chatController.createChat = async (req, res) => {
  const chat = new Chat(req.body);
  await chat.save();
  res.json({
    status: "Saved",
    data: chat
  });
};

chatController.getChat = async (req, res, next) => {
  const chat = await Chat.findById(req.params.id);
  res.json({
    status: "received",
    Usuario: chat
  });
};

chatController.modifyChat = async (req, res) => {
  const { id } = req.params;
  const chat = {
    id_users: req.body.id_users,
    id_characters: req.body.id_characters,
    id_masters: req.body.id_masters
  };

  await Chat.findByIdAndUpdate(id, { $set: chat }, { new: true });

  res.json({
    status: "Modified",
    modification: chat
  });
};

chatController.deleteChat = async (req, res) => {
  await Chat.findByIdAndDelete(req.params.id);
  res.json({
    'status': "Deleted",
    'character': req.params.id
  });
};

module.exports = chatController;
