import UserCreator from 'src/contexts/timer/users/application/UserCreator';
import MockUserRepository from './__mocks__/MockUserRepository';
import UserMother from './__mothers__/UserMother';
import SolveId from 'src/contexts/shared/domain/value-object/SolveId';

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
