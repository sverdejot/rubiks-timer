import User from '../../domain/entity/User';

export default interface UserFinderResponse {
  user: User | null;
}
