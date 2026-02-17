import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const student = this.studentsService.findOne(Number(id));
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    const updated = this.studentsService.update(Number(id), dto);
    if (!updated) throw new NotFoundException('Student not found');
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const removed = this.studentsService.remove(Number(id));
    if (!removed) throw new NotFoundException('Student not found');
    return removed;
  }
}
