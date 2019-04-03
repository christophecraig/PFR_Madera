import { Test, TestingModule } from '@nestjs/testing';
import { InsulationController } from './insulation.controller';

describe('Insulation Controller', () => {
  let controller: InsulationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsulationController],
    }).compile();

    controller = module.get<InsulationController>(InsulationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
