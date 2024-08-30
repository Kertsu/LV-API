import asyncHandler from "express-async-handler";
import { error, success } from "../utils/response.js";
import { Student } from "../models/student.model.js";

export const getAllStudents = asyncHandler(async (req, res) => {
  const data = await Student.find({});
  
  return success(res, { students: data }, "get all students");
});
