import Solve from '../entity/solve';
import SolveId from '../../../../shared/domain/value-object/solve-id';

export default interface SolveRepository {
  save(solve: Solve): Promise<void>;
  find(id: SolveId): Promise<Solve | null>;
  delete(id: SolveId): Promise<void>;
  findAll(): Promise<Solve[]>;
}
