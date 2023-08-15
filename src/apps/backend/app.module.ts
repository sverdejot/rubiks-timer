import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import SolveModule from 'src/contexts/timer/solves/infrastructure/http/solve.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SolveModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
