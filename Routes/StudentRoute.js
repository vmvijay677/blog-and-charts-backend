import express from "express";
import { createStudentDetails, getStudents, studentsAboveEighty, studentsBelowFifty, studentsBetweenFiftyAndEighty } from "../Controllers/StudentController.js";

const router = express.Router();

router.post("/create", createStudentDetails);

router.get("/alldetails", getStudents);

router.get("/getabove80", studentsAboveEighty);

router.get("/getbetween50and80", studentsBetweenFiftyAndEighty);

router.get("/getbelow50", studentsBelowFifty);

export default router;