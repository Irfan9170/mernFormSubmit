import express from 'express';
import { getStudent ,createStudent ,deleteStudent } from '../controllers/student.js'
const router = express.Router();

router.get('/',getStudent);
router.post('/',createStudent);
router.delete('/:id',deleteStudent);
export default router;