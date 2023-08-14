import SolveCreator from 'src/contexts/timer/solves/application/solve-creator';
import MockSolveRepository from './__mocks__/solve.repository';
import SolveMother from './__mothers__/SolveMother';

describe('create new solves', () => {
  let repo = new MockSolveRepository();

  beforeEach(() => {
    repo = new MockSolveRepository();
  });

  it('should create a valid solve', async () => {
    // given
    const request = {
      id: 'ac3d0d7e-ab27-4132-bbac-f0c79c7fcb62',
      date: 1672527600,
      userId: '1490d29a-e6a9-48da-9e5f-f40e0d1572f8',
      scramble: "F R' U2 B D' L2 F' R B' D L2 U",
      time: 10000,
    };

    const creator = new SolveCreator(repo);

    // when
    await creator.run(request);

    // then
    const expectedSolve = SolveMother.fromRequest(request);
    repo.assertSaveCalledWith(expectedSolve);
  });
});
