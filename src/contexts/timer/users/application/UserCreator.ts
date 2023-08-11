import SolveId from '../../../shared/domain/value-object/SolveId';
import UserId from '../../../shared/domain/value-object/UserId';
import Solves from '../domain/entity/Solves';
import User from '../domain/entity/User';
import UserRepository from '../domain/repository/UserRepository';
import UserName from '../domain/value-object/UserName';
import UserCreatorRequest from './request/UserCreatorRequest';

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
