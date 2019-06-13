const Master = require("../models/fichas");
const masterController = {};

masterController.getMasters = async (req, res, next) => {
  const masters = await Master.find();
  res.json(masters);
};

masterController.createMaster = async (req, res) => {
  const master = new Master(req.body);
  await master.save();
  res.json({
    status: "Saved",
    data: master
  });
};

masterController.getMaster = async (req, res, next) => {
  const master = await Master.findById(req.params.id);
  res.json({
    status: "received",
    Usuario: master
  });
};

masterController.modifyMaster = async (req, res) => {
  const { id } = req.params;
  const master = {
    id_user: req.body.id_user,
    id_character: req.body.id_character,
    title: req.body.title,
    content: req.body.content,
    cdate: req.body.cdate
  };

  await Master.findByIdAndUpdate(id, { $set: master }, { new: true });

  res.json({
    status: "Modified",
    modification: master
  });
};

masterController.deleteMaster = async (req, res) => {
  await Master.findByIdAndDelete(req.params.id);
  res.json({
    'status': "Deleted",
    'master': req.params.id
  });
};

module.exports = masterController;
