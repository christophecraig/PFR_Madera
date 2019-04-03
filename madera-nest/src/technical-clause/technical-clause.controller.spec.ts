import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalClauseController } from './technical-clause.controller';

describe('TechnicalClause Controller', () => {
  let controller: TechnicalClauseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalClauseController],
    }).compile();

    controller = module.get<TechnicalClauseController>(TechnicalClauseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
