import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalClauseService } from './technical-clause.service';

describe('TechnicalClauseService', () => {
  let service: TechnicalClauseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalClauseService],
    }).compile();

    service = module.get<TechnicalClauseService>(TechnicalClauseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
