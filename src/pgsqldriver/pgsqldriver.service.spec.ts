import { Test, TestingModule } from '@nestjs/testing';
import { PgsqldriverService } from './pgsqldriver.service';

describe('PgsqldriverService', () => {
  let service: PgsqldriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PgsqldriverService],
    }).compile();

    service = module.get<PgsqldriverService>(PgsqldriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
