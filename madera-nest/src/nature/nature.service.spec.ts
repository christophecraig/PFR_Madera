import { Test, TestingModule } from '@nestjs/testing';
import { NatureService } from './nature.service';

describe('NatureService', () => {
  let service: NatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NatureService],
    }).compile();

    service = module.get<NatureService>(NatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
