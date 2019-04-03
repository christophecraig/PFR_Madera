import { Test, TestingModule } from '@nestjs/testing';
import { ComponentTypeController } from './component-type.controller';

describe('Component Controller', () => {
  let controller: ComponentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentTypeController],
    }).compile();

    controller = module.get<ComponentTypeController>(ComponentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
