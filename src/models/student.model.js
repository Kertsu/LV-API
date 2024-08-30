import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const studentSchema = new Schema({
    studentId: String,
    email: String,
    firstName: String,
    middleName: String,
    lastName: String,
    avatar: String,
    contactNumber: String,
    currentAddress: String,
    birthdate: Date,
    gender: String
});

export const Student = new model('Student', studentSchema);
