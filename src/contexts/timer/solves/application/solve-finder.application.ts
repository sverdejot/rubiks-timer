import SolveRepository from '../domain/repository/solve.repository';
import SolveId from '../../../shared/domain/value-object/solve-id.value-object';
import SolveFinderRequest from './request/solve-finder.request';
import SolveFinderResponse from './response/solve-finder.response';
import { AllSolvesFinderResponse } from './response/all-solves-finder.response';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class SolveFinder {
  constructor(private readonly repo: SolveRepository) {}

  async find(request: SolveFinderRequest): Promise<SolveFinderResponse> {
    const id = new SolveId(request.id);

    const solve = await this.repo.find(id);

    return { solve: solve };
  }

  async findAll(): Promise<AllSolvesFinderResponse> {
    const solves = await this.repo.findAll();

    return { solves: solves };
  }
}
