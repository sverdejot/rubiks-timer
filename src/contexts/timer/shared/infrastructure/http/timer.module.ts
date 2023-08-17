import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import timerConfig from 'src/contexts/timer/shared/config/timer.config';
import SolveModule from 'src/contexts/timer/solves/infrastructure/http/solve.module';

@Module({
  imports: [
    ConfigModule.forFeature(timerConfig),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        database: config.get<string>('timer.db.mysql.database'),
        host: config.get<string>('timer.db.mysql.host'),
        port: config.get<number>('timer.db.port.port'),
        username: config.get<string>('timer.db.mysql.user'),
        password: config.get<string>('timer.db.mysql.password'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    SolveModule,
  ],
})
export default class TimerModule {}
