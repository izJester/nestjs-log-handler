import { Test, TestingModule } from '@nestjs/testing';
import { MongodriverService } from './mongodriver.service';

describe('MongodriverService', () => {
  let service: MongodriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongodriverService],
    }).compile();

    service = module.get<MongodriverService>(MongodriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
