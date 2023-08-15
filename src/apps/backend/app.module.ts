import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import SolveModule from 'src/contexts/timer/solves/infrastructure/http/solve.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonLoggerModule } from './winston.logger';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SolveModule,
    WinstonLoggerModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
