import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WinstonLoggerModule } from './logger/winston.module';
import { ConfigModule } from '@nestjs/config';
import TimerModule from 'src/contexts/timer/shared/infrastructure/http/timer.module';

@Module({
  imports: [TimerModule, WinstonLoggerModule, ConfigModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
