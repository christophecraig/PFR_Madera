import { Test, TestingModule } from '@nestjs/testing';
import { InsulationService } from './insulation.service';

describe('InsulationService', () => {
  let service: InsulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsulationService],
    }).compile();

    service = module.get<InsulationService>(InsulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
