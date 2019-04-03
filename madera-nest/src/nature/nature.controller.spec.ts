import { Test, TestingModule } from '@nestjs/testing';
import { NatureController } from './nature.controller';

describe('Nature Controller', () => {
  let controller: NatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NatureController],
    }).compile();

    controller = module.get<NatureController>(NatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
