import UserId from '../../../../shared/domain/value-object/user-id.value-object';
import User from '../entity/user.entity';

export default interface UserRepository {
  save(user: User): Promise<void>;
  find(id: UserId): Promise<User | null>;
}
