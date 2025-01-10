import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StudentService } from './ass-student.service';
import { Student } from './students.entity';

@Controller('ass-student')
export class AssStudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(data);
  }

  @Get()
  async getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: number): Promise<Student> {
    return this.studentService.getStudentById(id);
  }
}
