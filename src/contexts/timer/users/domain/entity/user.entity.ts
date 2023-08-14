import AggregateRoot from '../../../../shared/domain/aggregate-root';
import UserId from '../../../../shared/domain/value-object/user-id.value-object';
import { Primitives } from '../../../../shared/domain/value-object/value-object';
import UserName from '../value-object/user-name.value-object';
import Solves from './solves.entity';

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
