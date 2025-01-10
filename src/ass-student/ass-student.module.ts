import { Module } from '@nestjs/common';
import { StudentService } from './ass-student.service';
import { AssStudentController } from './ass-student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [AssStudentController]
})
export class AssStudentModule {}
