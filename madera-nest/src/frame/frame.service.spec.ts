import { Test, TestingModule } from '@nestjs/testing';
import { FrameService } from './frame.service';

describe('FrameService', () => {
  let service: FrameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrameService],
    }).compile();

    service = module.get<FrameService>(FrameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
