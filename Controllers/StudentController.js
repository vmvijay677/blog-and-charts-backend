import studentModel from "../Models/StudentModel.js";

//creating student details
export const createStudentDetails = async (req, res) => {
    const newStudent = new studentModel(req.body);

    try {
        await newStudent.save();
        res.status(200).json(newStudent);
    } catch (err) {
        res.status(500).json(err);
    }
};

//all students list
export const getStudents = async (req, res) => {
    try {
        const student = await studentModel.find({});

        res.status(200).json(student);
    } catch (err) {
        res.status(500).json(err);
    }
};

//students marks above 80%
export const studentsAboveEighty = async (req, res) => {
    try {
        const students = await studentModel.find({ average: { $gt: 80 } });

        res.status(200).json(students);
    } catch (err) {
        res.status(500).json(err);
    }
};

//students marks between 50% and 80%
export const studentsBetweenFiftyAndEighty = async (req, res) => {
    try {
        const students = await studentModel.find({ average: { $gt: 50, $lt: 80 } });

        res.status(200).json(students);
    } catch (err) {
        res.status(500).json(err);
    }
};

//students marks less than 50%
export const studentsBelowFifty = async (req, res) => {
    try {
        const students = await studentModel.find({ average: { $lt: 50 } });

        res.status(200).json(students);
    } catch (err) {
        res.status(500).json(err);
    }
};