import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Student } from './models';

describe('StudentsController', () => {
  let controller: StudentsController;

  const studentsService = {
    findAll: jest.fn().mockReturnValue([]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [{ provide: StudentsService, useValue: studentsService }],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET /students should return an array', async () => {
    const students = <Student[]>[
      {
        id: '1024',
        studentId: '1221',
        givenName: 'John',
        middleName: 'Michael',
        familyName: 'Doe',
        suffix: 'Jr.',
        gender: 'M',
        dateOfBirth: new Date('1990-01-01'),
        nationality: 'Filipino',
        address: 'CityVille, Marikina',
      },
    ];

    studentsService.findAll.mockResolvedValueOnce(students);

    const result = await controller.list();

    expect(result).toEqual(students);
  });
});
