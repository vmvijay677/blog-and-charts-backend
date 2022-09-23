import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    technologies: {
        type: String,
    },
    github: {
        type: String,
    },
    demo: {
        type: String,
    },
    picture: {
        type: String,
    }
}, {
    timestamps: true
});

const blogModel = mongoose.model("Blogs", blogSchema);

export default blogModel;