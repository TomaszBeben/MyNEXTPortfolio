import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
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
        timestamps: true //for date and time
    },
);

// if not exists than create a table but if exists than
export default mongoose.models.User || mongoose.model("User", UserSchema);