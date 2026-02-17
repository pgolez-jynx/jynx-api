import { Controller, Get } from '@nestjs/common';
import { Student } from './models';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async list(): Promise<Student[]> {
    return await this.studentsService.findAll();
  }
}
