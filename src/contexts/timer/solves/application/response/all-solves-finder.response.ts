import { Primitives } from 'src/contexts/shared/domain/value-object/value-object';

export default interface AllSolvesFinderResponse {
  solves: { [key: string]: Primitives }[];
}
