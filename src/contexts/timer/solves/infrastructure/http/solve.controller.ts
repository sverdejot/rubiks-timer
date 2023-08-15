import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import SolveFinder from '../../application/solve-finder.application';
import SolveCreator from '../../application/solve-creator.application';

@Controller('solve')
export default class SolveController {
  constructor(
    private readonly finder: SolveFinder,
    private readonly creator: SolveCreator,
  ) {}

  @Get()
  async getSolves(@Res() res: Response) {
    const solves = await this.finder.findAll();
    res.status(HttpStatus.OK).send(solves);
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
  ): Promise<void> {
    await this.creator.run({
      id: id,
      time: time,
      date: date,
      userId: userId,
      scramble: scramble,
    });
  }
}
