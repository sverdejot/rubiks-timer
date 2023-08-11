// TODO: create a class to mock each member of the interface passed by type parameter

import SolveId from 'src/contexts/shared/domain/value-object/SolveId';
import Solve from 'src/contexts/timer/solves/domain/entity/Solve';
import SolveRepository from 'src/contexts/timer/solves/domain/repository/SolveRepository';

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

  async find(id: SolveId): Promise<Solve | null> {
    console.info(`finding solve w/ id [${id.value}]`);
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
