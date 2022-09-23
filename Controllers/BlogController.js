import blogModel from "../Models/BlogModel.js";

//creating a blog abut the project
export const createBlog = async (req, res) => {
    const newBlog = new blogModel(req.body);

    try {
        await newBlog.save();
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(500).json(err);
    }
};

//getting blogs by id
export const getBlogsById = async (req, res) => {
    try {
        const { id } = req.params;

        const blogs = await blogModel.findById({ _id: Object(id) });

        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
};

//getting all blogs
export const getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({});

        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
};

//updating blogs
export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const updateData = req.body;

        const result = await blogModel.updateOne({ _id: Object(id) }, { $set: updateData });

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

//deleting blogs
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await blogModel.deleteOne({ _id: Object(id) });

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}