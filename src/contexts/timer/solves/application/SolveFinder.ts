import SolveRepository from '../domain/repository/SolveRepository';
import SolveId from '../../../shared/domain/value-object/SolveId';
import SolveFinderRequest from './request/SolveFinderRequest';
import SolveFinderResponse from './response/SolveFinderResponse';
import { AllSolvesFinderResponse } from './response/AllSolvesFinderResponse';

export default class SolveFinder {
  private readonly repo: SolveRepository;

  constructor(repo: SolveRepository) {
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
