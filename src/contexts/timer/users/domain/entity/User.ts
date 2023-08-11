import AggregateRoot from '../../../../shared/domain/AggregateRoot';
import UserId from '../../../../shared/domain/value-object/UserId';
import { Primitives } from '../../../../shared/domain/value-object/ValueObject';
import UserName from '../value-object/UserName';
import Solves from './Solves';

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
