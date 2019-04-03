import { Test, TestingModule } from '@nestjs/testing';
import { WoodFrameService } from './wood-frame.service';

describe('WoodFrameService', () => {
  let service: WoodFrameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WoodFrameService],
    }).compile();

    service = module.get<WoodFrameService>(WoodFrameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
