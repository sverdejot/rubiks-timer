import SolveRepository from '../domain/repository/solve-repository';
import SolveId from '../../../shared/domain/value-object/solve-id';
import SolveFinderRequest from './request/solve-finder-request';
import SolveFinderResponse from './response/solve-finder-response';
import { AllSolvesFinderResponse } from './response/all-solves-finder-response';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export default class SolveFinder {
  constructor(
    @Inject('SolveRepository') private readonly repo: SolveRepository,
  ) {
    this.repo = repo;
  }

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
