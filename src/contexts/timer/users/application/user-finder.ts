import UserId from '../../../shared/domain/value-object/user-id';
import UserRepository from '../domain/repository/user-repository';
import UserFinderRequest from './request/user-finder-request';
import UserFinderResponse from './response/user-finder-response';

export default class UserFinder {
  constructor(private readonly repo: UserRepository) {}

  async run(request: UserFinderRequest): Promise<UserFinderResponse> {
    const id = new UserId(request.id);
    const user = await this.repo.find(id);
    return {
      user: user,
    };
  }
}
