import asyncHandler from "express-async-handler";
import { error, success } from "../utils/response.js";

export const getAllStudents = asyncHandler(async (req, res) => {
  const sampleData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Michael Doe" },
  ];
  return success(res, { students: sampleData }, "get all students");
});
