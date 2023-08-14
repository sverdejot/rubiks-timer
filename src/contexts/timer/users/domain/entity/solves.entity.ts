import SolveId from '../../../../shared/domain/value-object/solve-id.value-object';

export default class Solves extends Array<SolveId> {
  constructor(solves?: SolveId[]) {
    super();
    if (solves?.length) this.push(...solves);
  }
}
