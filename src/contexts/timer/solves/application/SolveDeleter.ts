import SolveRepository from '../domain/repository/SolveRepository';
import SolveId from '../../../shared/domain/value-object/SolveId';
import { SolveDeleterRequest } from './request/SolveDeleterRequest';

export default class SolveDeleter {
  constructor(private readonly repo: SolveRepository) {}

  async run(request: SolveDeleterRequest): Promise<void> {
    const id = new SolveId(request.id);
    const solve = await this.repo.find(id);

    if (!solve) throw new Error('Solve not found');
    await this.repo.delete(id);
  }
}
