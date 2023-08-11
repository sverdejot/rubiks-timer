import SolveDeleter from 'src/contexts/timer/solves/application/SolveDeleter';
import SolveMother from './__mothers__/SolveMother';
import MockSolveRepository from './__mocks__/MockSolveRepository';

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
