import { body, validationResult } from "express-validator";


export const createUserValidator = [
  body("email").isEmail().withMessage("Formato de email inválido"),
  body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage(
      "La contraseña debe tener como mínimo 6 caracteres, y uno de ellos debe ser en mayúscula"
    ),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

export const loginValidator = [
  body("email").isEmail().withMessage("Formato del email inválido"),
  body("password").notEmpty().withMessage("La contraseña no puede estar vacía"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: errors.array() });
    }
    next();
  },
];
