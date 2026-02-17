import { Controller, Get } from '@nestjs/common';
import { Student } from './models';

@Controller('students')
export class StudentsController {
  @Get()
  list(): Student[] {
    return [];
  }
}
