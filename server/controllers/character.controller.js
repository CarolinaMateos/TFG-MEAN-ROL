const Character = require("../models/character");
const characterController = {};

characterController.getCharacters = async (req, res, next) => {
  const character = await Character.find();
  res.json(character);
};

characterController.createCharacter = async (req, res) => {
  const character = new Character(req.body);
  await character.save();
  res.json({
    status: "Saved",
    data: character
  });
};

characterController.getCharacter = async (req, res, next) => {
  const character = await Character.findById(req.params.id);
  res.json({
    status: "received",
    Usuario: character
  });
};

characterController.modifyCharacter = async (req, res) => {
  const { id } = req.params;
  const character = {
    id_user: req.body.id_user,
    name: req.body.name,
    identifier: req.body.identifier,
    file: req.body.file,
    npc: req.body.npc,
    img: req.body.img,
  };

  await Character.findByIdAndUpdate(id, { $set: character }, { new: true });

  res.json({
    status: "Modified",
    modification: character
  });
};

characterController.deleteCharacter = async (req, res) => {
  await Character.findByIdAndDelete(req.params.id);
  res.json({
    'status': "Deleted",
    'character': req.params.id
  });
};

module.exports = characterController;
