import asyncHandler from "express-async-handler";
import { error, success } from "../utils/response.js";
import { Student } from "../models/student.model.js";
import { studentSeeder } from "../utils/seeder.js";

export const seedStudents = asyncHandler(async (req, res) => {
  const count = parseInt(req.query.count) || undefined;
  const newStudents = studentSeeder(count);

  const data = await Student.insertMany(newStudents);

  return success(res, { student: data, count }, "seed new students");
});

export const getAllStudents = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;

  const data = await Student.find({}).limit(limit).skip((page - 1) * limit).exec();
  
  return success(res, { students: data, page, limit }, "get all students");
});

export const getStudentById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const data = await Student.find({ _id: id });

  return success(res, { student: data }, "get student by ID");
});

//initial
export const updateStudentById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const data = await Student.updateOne({ _id: id }, req.body);

  return success(res, { student: data }, "update student by ID");
});

//initial
export const deleteStudentById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const data = await Student.deleteOne({ _id: id });

  return success(res, { student: data }, "delete student by ID");
});

//for testing
export const deleteStudents = asyncHandler(async (req, res) => {
  await Student.deleteMany({});
  return success(res, null, "delete all students");
});