import UserId from 'src/contexts/shared/domain/value-object/user-id.value-object';
import User from 'src/contexts/timer/users/domain/entity/user.entity';
import UserRepository from 'src/contexts/timer/users/domain/repository/user.repository';

export default class MockUserRepository implements UserRepository {
  private readonly saveMock: jest.Mock;
  private readonly findMock: jest.Mock;

  // TODO should be returned by jest
  private user: User | null = null;

  constructor() {
    this.saveMock = jest.fn();
    this.findMock = jest.fn();
  }

  async save(user: User): Promise<void> {
    this.saveMock(user);
  }

  async find(id: UserId): Promise<User | null> {
    this.findMock(id);
    return this.user;
  }

  assertSaveCalledWith(user: User) {
    expect(this.saveMock).toHaveBeenCalledWith(user);
  }

  returnWhenFindCalled(user: User) {
    this.user = user;
  }
}
