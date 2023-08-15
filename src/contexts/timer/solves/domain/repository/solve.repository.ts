import Solve from '../entity/solve.entity';
import SolveId from '../../../../shared/domain/value-object/solve-id.value-object';

export default abstract class SolveRepository {
  abstract save(solve: Solve): Promise<void>;
  abstract find(id: SolveId): Promise<Solve | null>;
  abstract delete(id: SolveId): Promise<void>;
  abstract findAll(): Promise<Solve[]>;
}
