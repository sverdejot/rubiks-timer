import { v4 } from 'uuid';
import SolveFinder from 'src/contexts/timer/solves/application/solve-finder.application';
import SolveMother from './__mothers__/solve-mother';
import MockSolveRepository from './__mocks__/solve.repository';

describe('find solves', () => {
  let repo: MockSolveRepository = new MockSolveRepository();

  beforeEach(() => {
    repo = new MockSolveRepository();
  });

  it('should find an existing solve', async () => {
    // given
    const request = { id: v4() };
    const expectedSolve = SolveMother.withId(request.id);
    repo.returnWhenFindCalled(expectedSolve);

    const finder = new SolveFinder(repo);

    // when
    const { solve } = await finder.find(request);

    // then
    expect(solve === expectedSolve.toPrimitives());
  });

  it('should return null when solve does not exist', async () => {
    // given
    const request = { id: v4() };
    const finder = new SolveFinder(repo);

    // when
    const { solve } = await finder.find(request);

    // then
    expect(solve === null);
  });

  it('should return null when solve does not exist', async () => {
    // given

    const finder = new SolveFinder(repo);

    const expectedSolves = [
      SolveMother.random(),
      SolveMother.random(),
      SolveMother.random(),
    ];

    repo.returnWhenFindAllCalled(expectedSolves);

    // when
    const { solves } = await finder.findAll();

    // then
    expect(solves === expectedSolves.map((solve) => solve.toPrimitives()));
  });
});
