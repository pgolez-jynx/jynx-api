import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';

describe('StudentsController', () => {
  let controller: StudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET /students should return an array', () => {
    const result = controller.list();
    expect(Array.isArray(result)).toBe(true);
  });
});
