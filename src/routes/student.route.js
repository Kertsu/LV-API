import express from "express";
import {
    getAllStudents,
    seedStudents,
    deleteStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById
} from "../controllers/student.controller.js";

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/seed", seedStudents);
studentRouter.get("/:id", getStudentById);
studentRouter.put("/:id", updateStudentById);
studentRouter.delete("/:id", deleteStudentById);
studentRouter.delete("/", deleteStudents);

export default studentRouter