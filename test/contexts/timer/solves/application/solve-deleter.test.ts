import SolveDeleter from 'src/contexts/timer/solves/application/solve-deleter.application';
import MockSolveRepository from './__mocks__/solve.repository';
import SolveMother from './__mothers__/solve-mother';

describe('delete solves', () => {
  let repo: MockSolveRepository;

  beforeEach(() => {
    repo = new MockSolveRepository();
  });

  it('should delete an existing solve', async () => {
    // given
    const solve = SolveMother.random();
    repo.returnWhenFindCalled(solve);
    const deleter = new SolveDeleter(repo);

    // when
    await deleter.run({ id: solve.id.toString() });

    // then
    repo.assertDeleteCalledWith(solve.id);
  });
});
