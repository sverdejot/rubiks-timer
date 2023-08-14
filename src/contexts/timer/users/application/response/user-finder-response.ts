import User from '../../domain/entity/user';

export default interface UserFinderResponse {
  user: User | null;
}
