import AggregateRoot from '../../../../shared/domain/aggregate-root';
import UserId from '../../../../shared/domain/value-object/user-id';
import { Primitives } from '../../../../shared/domain/value-object/value-object';
import UserName from '../value-object/user-name';
import Solves from './solves';

export default class User extends AggregateRoot {
  constructor(
    readonly id: UserId,
    readonly name: UserName,
    readonly solves: Solves,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.solves = solves;
  }

  toPrimitives(): { [key: string]: Primitives } {
    return {
      id: this.id.value,
      name: this.name.value,
      solves: [this.solves.map((solve) => solve.value)],
    };
  }
}
