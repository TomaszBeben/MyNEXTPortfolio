import mongoose from 'mongoose'

export const NoteShema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description:{
        type: String,
        required: true,
        maxlength: [200, 'Title cannot be more than 200 characters']
    }
})