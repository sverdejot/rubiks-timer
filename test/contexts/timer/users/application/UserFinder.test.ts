import UserFinder from 'src/contexts/timer/users/application/UserFinder';
import MockUserRepository from './__mocks__/MockUserRepository';
import UserMother from './__mothers__/UserMother';

describe('find users', () => {
  let repo: MockUserRepository;

  beforeEach(() => {
    repo = new MockUserRepository();
  });

  it('should find users', async () => {
    // given
    const user = UserMother.random();
    const userId = user.id;

    repo.returnWhenFindCalled(user);
    const finder = new UserFinder(repo);

    // when
    const foundUser = await finder.run({ id: userId.value });

    // then
    expect(foundUser.user).toEqual(user);
  });
});
