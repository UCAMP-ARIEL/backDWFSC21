const Usuario = require('../Models/UserModel')

const getUsers = async(req, res) => {
  try{
    const usuarios= await Usuario.find({})
    res.json({usuarios})
  }
  catch(err){
    res.status(500).json({msj:"hubo un error"})
  }
};

const postUser = async(req, res) => {
  const{nombre,email}=req.body
  try{
    const nuevoUsuario= await Usuario.create({nombre,email})
    res.json({nuevoUsuario})
  }
  catch(err){
    res.status(500).json({msj:"hubo un error"})
  }
};

const putUser = (req, res) => {
  db.usuarios.forEach((u) => {
    if (u.id === parseInt(req.body.id)) {
      u.nombre = req.body.nombre;
      u.edad = req.body.edad;
    }
  });
  res.send(db.usuarios);
};

const deleteUser = (req, res) => {
  db.usuarios.forEach((u) => {
    if (u.id === parseInt(req.body.id)) {
      db.usuarios.splice(1);
    }
  });
  res.send(db.usuarios);
};

const getUserById = (req, res) => {
  const usuario = db.usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario) res.status(404).send("Usuario no encontrado");
  res.send(usuario);
};

module.exports = { getUsers, getUserById, postUser, deleteUser, putUser };
