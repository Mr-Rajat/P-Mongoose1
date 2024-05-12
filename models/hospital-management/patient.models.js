import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    bloodGroup: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
    
}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)