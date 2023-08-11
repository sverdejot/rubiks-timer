import UserId from 'src/contexts/shared/domain/value-object/UserId';
import Solves from 'src/contexts/timer/users/domain/entity/Solves';
import User from 'src/contexts/timer/users/domain/entity/User';
import UserName from 'src/contexts/timer/users/domain/value-object/UserName';
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
