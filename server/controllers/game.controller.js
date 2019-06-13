const Game = require("../models/game-room");
const gameController = {};

gameController.getGames = async (req, res, next) => {
  const games = await Game.find();
  res.charset = 'utf-8';
  res.json(games);
};

gameController.createGame = async (req, res) => {
  const game = new Game(req.body);
  await game.save();
  res.charset = 'utf-8';
  res.json({
    status: "Saved",
    data: game
  });
};

gameController.getGame = async (req, res, next) => {
  const game = await Game.findById(req.params.id);
  res.charset = 'utf-8';
  res.json({
    status: "received",
    Usuario: game
  });
};

gameController.modifyGame = async (req, res) => {
  const { id } = req.params;
  const game = {
    title: req.body.title,
    id_user: req.body.id_user,
    players: req.body.players, 
    description: req.body.description,
    password: req.body.password,
    open: req.body.open,
    img: req.body.img
  };

  await Game.findByIdAndUpdate(id, { $set: game }, { new: true });

  res.charset = 'utf-8';
  res.json({
    status: "Modified",
    modification: game
  });
};

gameController.deleteGame = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.charset = 'utf-8';
  res.json({
    'status': "Deleted",
    'character': req.params.id
  });
};

module.exports = gameController;
