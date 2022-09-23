import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    c: {
        type: String,
        required: true,
    },
    java: {
        type: String,
        required: true
    },
    javascript: {
        type: String,
        required: true,
    },
    se: {
        type: String,
        required: true,
    },
    mp: {
        type: String,
        required: true,
    },
    average: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const studentModel = mongoose.model("Students", studentSchema);

export default studentModel;