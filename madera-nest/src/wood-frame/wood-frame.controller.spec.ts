import { Test, TestingModule } from '@nestjs/testing';
import { WoodFrameController } from './wood-frame.controller';

describe('WoodFrame Controller', () => {
  let controller: WoodFrameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WoodFrameController],
    }).compile();

    controller = module.get<WoodFrameController>(WoodFrameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
