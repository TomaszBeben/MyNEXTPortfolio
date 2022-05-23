import mongoose from "mongoose"

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [200, 'username cannot be longer that 200 ']
    }
})