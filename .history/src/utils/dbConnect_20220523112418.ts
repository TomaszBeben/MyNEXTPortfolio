import mongoose from "mongoose"

const MONGO_DB_URL_LOCAL = process.env.MONGO_DB_URL_LOCAL

const connection = {}

if(!MONGO_DB_URL_LOCAL) {
    throw new Error(
        
    )
}
export default dbConnect