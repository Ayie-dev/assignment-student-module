import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './students.entity'

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    const student = this.studentRepository.create(data);
    return this.studentRepository.save(student);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  
  async getStudentById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException(`Sorry we couldn't find the student with id ${id}, please try again`);
    }
    return student;
  }

  async updateStudent(id: number, data: Partial<Student>): Promise<Student> {
  const student = await this.getStudentById(id);
  Object.assign(student, data);
  return this.studentRepository.save(student);
}

async deleteStudent(id: number): Promise<void> {
    const result = await this.studentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Sorry we couldn't find the student with id ${id}, please try again`);
    } else if (result.affected > 0) {
        console.log(`Student with id ${id} has been deleted successfully`);
    }
  }
  

  


}
