import SolveId from '../../../shared/domain/value-object/solve-id';
import UserId from '../../../shared/domain/value-object/user-id';
import Solves from '../domain/entity/solves';
import User from '../domain/entity/user';
import UserRepository from '../domain/repository/user-repository';
import UserName from '../domain/value-object/user-name';
import UserCreatorRequest from './request/user-creator-request';

export default class UserCreator {
  constructor(private readonly repo: UserRepository) {}

  async run(request: UserCreatorRequest) {
    const user = new User(
      new UserId(request.id),
      new UserName(request.name),
      new Solves(request.solves.map((solve) => new SolveId(solve))),
    );

    await this.repo.save(user);
  }
}
