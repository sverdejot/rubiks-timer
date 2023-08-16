import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import SolveModule from 'src/contexts/timer/solves/infrastructure/http/solve.module';
import { WinstonLoggerModule } from './logger/winston.logger';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SolveModule, WinstonLoggerModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
