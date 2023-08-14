import UserId from '../../../../shared/domain/value-object/user-id';
import User from '../entity/user';

export default interface UserRepository {
  save(user: User): Promise<void>;
  find(id: UserId): Promise<User | null>;
}
