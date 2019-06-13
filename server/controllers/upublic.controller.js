const Upublic = require("../models/publicaciones");
const upublicController = {};

upublicController.getUpublics = async (req, res, next) => {
  const upublics = await Upublic.find();
  res.json(upublics);
};

upublicController.createUpublic = async (req, res) => {
  const upublic = new Upublic(req.body);
  await upublic.save();
  res.json({
    status: "Saved",
    data: upublic
  });
};

upublicController.getUpublic = async (req, res, next) => {
  const upublic = await Upublic.findById(req.params.id);
  res.json({
    status: "received",
    Usuario: upublic
  });
};

upublicController.modifyUpublic = async (req, res) => {
  const { id } = req.params;
  const upublic = {
    id_user: req.body.id_user,
    id_character: req.body.id_character,
    content: req.body.content,
    game_room_id: req.body.game_room_id,
    numlikes: req.body.numlikes,
    cdate: req.body.cdate
  };

  await Upublic.findByIdAndUpdate(id, { $set: upublic }, { new: true });

  res.json({
    status: "Modified",
    modification: upublic
  });
};

upublicController.deleteUpublic = async (req, res) => {
  await Upublic.findByIdAndDelete(req.params.id);
  res.json({
    status: "Deleted",
    user: req.params.id
  });
};

module.exports = upublicController;
