import Solve from '../domain/entity/Solve';
import SolveRepository from '../domain/repository/SolveRepository';
import Scramble from '../domain/value-object/Scramble';
import SolveDate from '../domain/value-object/SolveDate';
import SolveId from '../../../shared/domain/value-object/SolveId';
import SolveTime from '../domain/value-object/SolveTime';
import UserId from '../../../shared/domain/value-object/UserId';
import SolveCreatorRequest from './request/SolveCreatorRequest';

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
