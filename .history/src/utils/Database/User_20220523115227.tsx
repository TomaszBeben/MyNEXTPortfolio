import mongoose from "mongoose"

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 200,
        },
        email: {
            type: String,
            required: true,
            maxlength: 200,
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', UserSchema)