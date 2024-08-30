import express from "express";
import { getAllStudents } from "../controllers/student.controller.js";

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);

export default studentRouter