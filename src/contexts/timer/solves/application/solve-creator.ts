import Solve from '../domain/entity/solve';
import SolveRepository from '../domain/repository/solve-repository';
import Scramble from '../domain/value-object/scramble';
import SolveDate from '../domain/value-object/solve-date';
import SolveId from '../../../shared/domain/value-object/solve-id';
import SolveTime from '../domain/value-object/solve-time';
import UserId from '../../../shared/domain/value-object/user-id';
import SolveCreatorRequest from './request/solve-creator-request';

export default class SolveCreator {
  private readonly repo: SolveRepository;

  constructor(repo: SolveRepository) {
    this.repo = repo;
  }

  async run(request: SolveCreatorRequest): Promise<void> {
    const solve = new Solve(
      new SolveId(request.id),
      new SolveTime(request.time),
      new UserId(request.userId),
      new Scramble(request.scramble),
      new SolveDate(request.date),
    );

    await this.repo.save(solve);
  }
}
