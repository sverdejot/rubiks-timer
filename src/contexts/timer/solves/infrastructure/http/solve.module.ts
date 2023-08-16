import { Module } from '@nestjs/common';
import SolveController from './solve.controller';
import { TypeORMSolveRepository } from '../persistance/typeorm/repository/solve.repository';
import SolveFinder from '../../application/solve-finder.application';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import SolveRepository from '../../domain/repository/solve.repository';
import SolveCreator from '../../application/solve-creator.application';
import SolveDeleter from '../../application/solve-deleter.application';
import { ConfigModule, ConfigService } from '@nestjs/config';
import timerConfig from 'src/contexts/timer/shared/config/timer.config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forFeature(timerConfig),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'timerDs',
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        database: config.get<string>('timer.db.mysql.database'),
        host: config.get<string>('timer.db.mysql.host'),
        port: config.get<number>('timer.db.port.port'),
        username: config.get<string>('timer.db.mysql.user'),
        password: config.get<string>('timer.db.mysql.password'),
        entities: [`${__dirname}/../persistance/typeorm/schema/*.schema.*`],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [SolveController],
  providers: [
    {
      provide: SolveRepository,
      useFactory: (dataSource: DataSource) => {
        return new TypeORMSolveRepository(dataSource);
      },
      inject: [getDataSourceToken('timerDs')],
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
