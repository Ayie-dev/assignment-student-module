import { Test, TestingModule } from '@nestjs/testing';
import { AssStudentController } from './ass-student.controller';

describe('AssStudentController', () => {
  let controller: AssStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssStudentController],
    }).compile();

    controller = module.get<AssStudentController>(AssStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
