import SolveRepository from '../domain/repository/solve-repository';
import SolveId from '../../../shared/domain/value-object/solve-id';
import { SolveDeleterRequest } from './request/solve-deleter-request';

export default class SolveDeleter {
  constructor(private readonly repo: SolveRepository) {}

  async run(request: SolveDeleterRequest): Promise<void> {
    const id = new SolveId(request.id);
    const solve = await this.repo.find(id);

    if (!solve) throw new Error('Solve not found');
    await this.repo.delete(id);
  }
}
