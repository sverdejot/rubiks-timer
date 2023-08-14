import SolveId from '../../../shared/domain/value-object/solve-id.value-object';
import UserId from '../../../shared/domain/value-object/user-id.value-object';
import Solves from '../domain/entity/solves.entity';
import User from '../domain/entity/user.entity';
import UserRepository from '../domain/repository/user.repository';
import UserName from '../domain/value-object/user-name.value-object';
import UserCreatorRequest from './request/user-creator.request';

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
