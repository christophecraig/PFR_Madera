import { Test, TestingModule } from '@nestjs/testing';
import { FrameController } from './frame.controller';

describe('Frame Controller', () => {
  let controller: FrameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrameController],
    }).compile();

    controller = module.get<FrameController>(FrameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
