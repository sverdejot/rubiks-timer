// TODO: create a class to mock each member of the interface passed by type parameter

import SolveId from 'src/contexts/shared/domain/value-object/solve-id';
import Solve from 'src/contexts/timer/solves/domain/entity/solve';
import SolveRepository from 'src/contexts/timer/solves/domain/repository/solve-repository';

export default class MockSolveRepository implements SolveRepository {
  private readonly saveMock: jest.Mock;
  private readonly deleteMock: jest.Mock;
  private solve: Solve | null = null;
  private solves: Solve[] = [];

  constructor() {
    this.saveMock = jest.fn();
    this.deleteMock = jest.fn();
  }

  async save(solve: Solve): Promise<void> {
    this.saveMock(solve);
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  async find(id: SolveId): Promise<Solve | null> {
    return this.solve;
  }

  async findAll(): Promise<Solve[]> {
    return [];
  }

  async delete(id: SolveId): Promise<void> {
    this.deleteMock(id);
  }

  returnWhenFindCalled(solve: Solve): void {
    this.solve = solve;
  }

  returnWhenFindAllCalled(solves: Solve[]): void {
    this.solves = solves;
  }

  assertSaveCalledWith(solve: Solve): void {
    expect(this.saveMock).toHaveBeenCalledWith(solve);
  }

  assertDeleteCalledWith(id: SolveId): void {
    expect(this.deleteMock).toHaveBeenCalledWith(id);
  }
}
