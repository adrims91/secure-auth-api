import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


export const dbConnection = async (dbUri) => {
    try {
        await mongoose.connect(dbUri)
        console.log("MongoDB conectado")
    }catch(error) {
        console.error(error.message)
        process.exit(1)
    }
}
