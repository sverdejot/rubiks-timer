import UserId from 'src/contexts/shared/domain/value-object/user-id.value-object';
import Solves from 'src/contexts/timer/users/domain/entity/solves.entity';
import User from 'src/contexts/timer/users/domain/entity/user.entity';
import UserName from 'src/contexts/timer/users/domain/value-object/user-name.value-object';
import { v4 } from 'uuid';

// TODO: this can be refactored
export default class UserMother {
  private id?: UserId = undefined;
  private name?: UserName = undefined;
  private solves?: Solves = undefined;

  constructor(id?: UserId, name?: UserName, solves?: Solves) {
    this.id = id;
    this.name = name;
    this.solves = solves;
  }

  withId(id: string): UserMother {
    return new UserMother(new UserId(id), this.name, this.solves);
  }

  withName(name: string): UserMother {
    return new UserMother(this.id, new UserName(name), this.solves);
  }

  withSolves(solves: []): UserMother {
    return new UserMother(this.id, this.name, new Solves(solves));
  }

  getResult(): User {
    return new User(
      this.id ?? new UserId(v4()),
      this.name ?? new UserName('samuel verdejo'),
      this.solves ?? new Solves([]),
    );
  }

  // TODO: clean this up, use real random values
  static random(): User {
    return new User(
      new UserId(v4()),
      new UserName('XXXXXXXXXXXXXX'),
      new Solves(),
    );
  }
}
