import { Injectable } from '@nestjs/common';
import { Student } from './models';

@Injectable()
export class StudentsService {
  async findAll(): Promise<Student[]> {
    return Promise.resolve([]);
  }
}
