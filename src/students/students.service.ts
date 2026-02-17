import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private nextId = 1;

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: number): Student | undefined {
    return this.students.find((s) => s.id === id);
  }

  create(dto: CreateStudentDto): Student {
    const student: Student = { id: this.nextId++, name: dto.name, email: dto.email };
    this.students.push(student);
    return student;
  }

  update(id: number, dto: UpdateStudentDto): Student | null {
    const student = this.findOne(id);
    if (!student) return null;
    student.name = dto.name ?? student.name;
    student.email = dto.email ?? student.email;
    return student;
  }

  remove(id: number): Student | null {
    const idx = this.students.findIndex((s) => s.id === id);
    if (idx === -1) return null;
    const [removed] = this.students.splice(idx, 1);
    return removed;
  }
}
