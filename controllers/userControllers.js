import { generateToken } from "../middlewares/generateToken.js"
import { User } from "../models/userModels.js"
import bcrypt from 'bcrypt'

export const createUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})
        if (user) {
            return res.status(400).json({success: false, message: "Ese email ya está siendo utilizado"})
        }
        const newUser = new User({
            email,
            password
        })
        await newUser.save()
        res.status(201).json({success: true, message: 'Usuario creado correctamente'})

    }catch(error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({success: false, message: "Usuario no encontrado"})
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({success: false, message: "Contraseña incorrecta"})
        }
        const token = generateToken(user)
        res.status(200).json({success: true, message: "Login correcto", token})
    }catch(error) {
        next(error)
    }
}