import express from 'express'
import { createUserValidator, loginValidator } from '../validators/userValidator.js'
import { createUser, login } from '../controllers/userControllers.js'

export const userRouter = express.Router()

userRouter.post("/register", createUserValidator, createUser)
userRouter.post("/login", loginValidator, login)