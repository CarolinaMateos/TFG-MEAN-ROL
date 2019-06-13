const User = require('../models/user'); 
const userController = {}; 

userController.getUsers = async (req, res) => {
    const usuarios = await User.find();
    res.json(usuarios); 
}; 

userController.createUser = async (req, res) => {
    const usuario = new User(req.body); 
    await usuario.save(); 
    res.json({
        'status':'Saved',
        'data': usuario
    }); 
}; 

userController.getUser = async (req, res) => {
    const usuario = await User.findById(req.params.id); 
    res.json({
        'status':'received',
        'Usuario': usuario
    }); 
}; 

userController.modifyUser = async (req, res) => {
    const { id } = req.params; 
    const usuario = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        uname: req.body.uname,
        date: req.body.cdate,
        open: req.body.open,
        level: req.body.level,
        img: req.body.img,
        friendList: req.body.friendList,
        followList: req.body.followList
    }; 
    
    await User.findByIdAndUpdate(id, {$set: usuario}, {new: true});

    res.json({
        'status':'Modified',
        'modification': usuario
    }); 
}; 

userController.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id); 
    res.json({
        'status':'Deleted',
        'user': req.params.id
    }); 
};

module.exports = userController; 