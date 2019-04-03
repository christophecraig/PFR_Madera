import { Test, TestingModule } from '@nestjs/testing';
import { CutController } from './cut.controller';

describe('Cut Controller', () => {
  let controller: CutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CutController],
    }).compile();

    controller = module.get<CutController>(CutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
