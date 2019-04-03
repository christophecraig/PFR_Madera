import { Test, TestingModule } from '@nestjs/testing';
import { CutService } from './cut.service';

describe('CutService', () => {
  let service: CutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CutService],
    }).compile();

    service = module.get<CutService>(CutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
