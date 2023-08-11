import UserId from '../../../../shared/domain/value-object/UserId';
import User from '../entity/User';

export default interface UserRepository {
  save(user: User): Promise<void>;
  find(id: UserId): Promise<User | null>;
}
