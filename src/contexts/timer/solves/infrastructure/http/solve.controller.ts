import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Put,
} from '@nestjs/common';
import SolveFinder from '../../application/solve-finder.application';
import SolveCreator from '../../application/solve-creator.application';
import SolveDeleter from '../../application/solve-deleter.application';
import { CreateSolveRequest } from './requests/create-solve.request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('solve')
@Controller('solve')
export default class SolveController {
  private readonly logger: Logger = new Logger(SolveController.name);

  constructor(
    private readonly finder: SolveFinder,
    private readonly creator: SolveCreator,
    private readonly deleter: SolveDeleter,
  ) {}

  @Get()
  async getSolves() {
    this.logger.log('Finding all solves');
    return await this.finder.findAll();
  }

  @Get(':id')
  async getSolve(@Param('id') id: string) {
    this.logger.log(`Finding solve with id [${id}]`);
    return await this.finder.find({ id: id });
  }

  @Put(':id')
  async createSolve(@Param('id') id: string, @Body() req: CreateSolveRequest) {
    this.logger.log(`Trying to create solve with id [${id}]`);
    await this.creator.run({
      id: id,
      time: req.time,
      date: req.date,
      userId: req.userId,
      scramble: req.scramble,
    });
  }

  @Delete(':id')
  async deleteSolve(@Param('id') id: string) {
    this.logger.log(`Trying to delete solve with id [${id}]`);
    await this.deleter.run({ id: id });
  }
}
