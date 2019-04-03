import { Test, TestingModule } from '@nestjs/testing';
import { ComponentTypeService } from './component-type.service';

describe('ComponentTypeService', () => {
  let service: ComponentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentTypeService],
    }).compile();

    service = module.get<ComponentTypeService>(ComponentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
