import UserId from '../../../shared/domain/value-object/UserId';
import UserRepository from '../domain/repository/UserRepository';
import UserFinderRequest from './request/UserFinderRequest';
import UserFinderResponse from './response/UserFinderResponse';

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
