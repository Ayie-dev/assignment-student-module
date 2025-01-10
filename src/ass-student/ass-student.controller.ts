import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './ass-student.service';
import { Student } from './students.entity';

@Controller('ass-student')
export class AssStudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(data);
  }
}