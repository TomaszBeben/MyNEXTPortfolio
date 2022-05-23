import mongoose from "mongoose"

const MONGO_DB_URL_LOCAL = process.env.MONGO_DB_URL_LOCAL

const connection = {}

if(!MONGO_DB_URL_LOCAL) {
    throw new Error(

    )
}

let cached = global.mongoose
if(!cached){
    cached = global.mongoose = {
        connection: null,
        promise: null,
    }
}

async function dbConnect() {
    if (cached.promise){
        return cached.connection
    }

    if(!cached.promise) {
        const opts = {
            bufferComands: false,
        }

        cached.promise = mongoose.connect( MONGO_DB_URL_LOCAL, opts ).then(mongoose) => {
            return mongoose
        }
    }

    cached.connect = await cached.promise
}

export default dbConnect