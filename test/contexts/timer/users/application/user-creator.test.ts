import UserCreator from 'src/contexts/timer/users/application/user-creator';
import MockUserRepository from './__mocks__/user.repository';
import UserMother from './__mothers__/user-mother';
import SolveId from 'src/contexts/shared/domain/value-object/solve-id';

describe('create users', () => {
  let repo: MockUserRepository;

  beforeEach(() => {
    repo = new MockUserRepository();
  });

  it('should create a new user', async () => {
    // given
    const newUser = UserMother.random();

    const creator = new UserCreator(repo);

    // when
    await creator.run({
      id: newUser.id.value,
      name: newUser.name.value,
      solves: newUser.solves.map((s: SolveId) => s.value),
    });

    //then
    repo.assertSaveCalledWith(newUser);
  });
});
