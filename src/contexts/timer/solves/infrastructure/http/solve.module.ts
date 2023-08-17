import { Module } from '@nestjs/common';
import SolveController from '../../../solves/infrastructure/http/solve.controller';
import { TypeORMSolveRepository } from '../../../solves/infrastructure/persistance/typeorm/repository/solve.repository';
import SolveFinder from '../../../solves/application/solve-finder.application';
import { TypeOrmModule } from '@nestjs/typeorm';
import SolveRepository from '../../../solves/domain/repository/solve.repository';
import SolveCreator from '../../../solves/application/solve-creator.application';
import SolveDeleter from '../../../solves/application/solve-deleter.application';
import { SolveSchema } from '../persistance/typeorm/schema/solve.schema';

@Module({
  imports: [TypeOrmModule.forFeature([SolveSchema])],
  controllers: [SolveController],
  providers: [
    {
      provide: SolveRepository,
      useClass: TypeORMSolveRepository,
    },
    {
      provide: SolveFinder,
      useClass: SolveFinder,
    },
    {
      provide: SolveCreator,
      useClass: SolveCreator,
    },
    {
      provide: SolveDeleter,
      useClass: SolveDeleter,
    },
  ],
})
export default class SolveModule {}
