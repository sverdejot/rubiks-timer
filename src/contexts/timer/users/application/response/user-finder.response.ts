import User from '../../domain/entity/user.entity';

export default interface UserFinderResponse {
  user: User | null;
}
