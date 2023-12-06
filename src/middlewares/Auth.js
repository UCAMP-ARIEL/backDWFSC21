const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // EXTRAEMOS EL TOKEN QUE VIENE DESDE LA PETICIÓN
  const token = req.header("x-auth-token");

  // SI NO HAY TOKEN, RETORNAMOS UN ERROR
  if (!token) {
    return res.status(401).json({
      msg: "No hay token, permiso no válido",
    });
  }

  try {
    // CONFIRMAMOS LA VERIFICACIÓN DEL TOKEN A TRAVÉS DE LA LIBRERÍA DE JWT
    const openToken = jwt.verify(token, process.env.SECRET);

    // SI TODO ESTÁ CORRECTO, A LA PETICIÓN LE ANCLAMOS UNA PROPIEDAD ADICIONAL CON EL TOKEN DESCIFRADO
    req.user = openToken.user;

    // NEXT, AL INVOCARSE, PERMITE AVANZAR A LA SIGUIENTE FUNCIÓN
    next();
  } catch (error) {
    res.json({
      msg: "Hubo un error de autenticacion",
      error,
    });
  }
};
