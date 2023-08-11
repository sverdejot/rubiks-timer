import { Controller, Get, Param } from '@nestjs/common';
import SolveFinder from 'src/contexts/timer/solves/application/SolveFinder';

@Controller('solve')
export class SolveController {
  private readonly solveFinder: SolveFinder;

  constructor(solveFinder: SolveFinder) {
    this.solveFinder = solveFinder;
  }

  @Get(':id')
  async getSolve(@Param('id') id: string): Promise<any> {
    return this.solveFinder.find({ id });
  }
}
