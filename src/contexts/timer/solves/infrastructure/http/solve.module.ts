import { Module } from '@nestjs/common';
import SolveController from './solve.controller';
import { TypeORMSolveRepository } from '../persistance/typeorm/repository/solve.repository';
import SolveFinder from '../../application/solve-finder.application';
import { SolveSchema } from '../persistance/typeorm/schema/solve.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import SolveRepository from '../../domain/repository/solve.repository';
import SolveCreator from '../../application/solve-creator.application';
import SolveDeleter from '../../application/solve-deleter.application';

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
