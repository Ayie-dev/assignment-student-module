import { Test, TestingModule } from '@nestjs/testing';
import { AssStudentService } from './ass-student.service';

describe('AssStudentService', () => {
  let service: AssStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssStudentService],
    }).compile();

    service = module.get<AssStudentService>(AssStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
