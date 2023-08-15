import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import SolveFinder from '../../application/solve-finder.application';
import SolveCreator from '../../application/solve-creator.application';
import SolveDeleter from '../../application/solve-deleter.application';

@Controller('solve')
export default class SolveController {
  constructor(
    private readonly finder: SolveFinder,
    private readonly creator: SolveCreator,
    private readonly deleter: SolveDeleter,
  ) {}

  @Get()
  async getSolves() {
    return await this.finder.findAll();
  }

  @Get(':id')
  async getSolve(@Param('id') id: string) {
    return await this.finder.find({ id: id });
  }

  @Put(':id')
  async createSolve(
    @Param('id') id: string,
    @Body('time') time: number,
    @Body('date') date: number,
    @Body('userId') userId: string,
    @Body('scramble') scramble: string,
  ) {
    await this.creator.run({
      id: id,
      time: time,
      date: date,
      userId: userId,
      scramble: scramble,
    });
  }

  @Delete(':id')
  async deleteSolve(@Param('id') id: string) {
    await this.deleter.run({ id: id });
  }
}
