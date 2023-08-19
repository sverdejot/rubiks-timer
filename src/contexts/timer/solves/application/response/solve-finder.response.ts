import { Primitives } from 'src/contexts/shared/domain/value-object/value-object';

export default interface SolveFinderResponse {
  solve: { [key: string]: Primitives } | null;
}
