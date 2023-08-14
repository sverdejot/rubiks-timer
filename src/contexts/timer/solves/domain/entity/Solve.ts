import SolveTime from '../value-object/solve-time';
import UserId from '../../../../shared/domain/value-object/user-id';
import Scramble from '../value-object/scramble';
import SolveDate from '../value-object/solve-date';
import SolveId from '../../../../shared/domain/value-object/solve-id';
import AggregateRoot from '../../../../shared/domain/aggregate-root';
import { Primitives } from '../../../../shared/domain/value-object/value-object';

export default class Solve extends AggregateRoot {
  readonly id: SolveId;
  readonly time: SolveTime;
  readonly userId: UserId;
  readonly scramble: Scramble;
  readonly date: SolveDate;

  constructor(
    id: SolveId,
    time: SolveTime,
    userId: UserId,
    scramble: Scramble,
    date: SolveDate,
  ) {
    super();

    this.id = id;
    this.time = time;
    this.userId = userId;
    this.scramble = scramble;
    this.date = date;
  }

  toPrimitives(): { [key: string]: Primitives } {
    return {
      id: this.id.value,
      time: this.time.value,
      userId: this.userId.value,
      scramble: this.scramble.value,
      date: this.date.value,
    };
  }

  // TODO: change this inline type to a more generic type
  fromPrimitives(primitives: {
    id: string;
    time: number;
    userId: string;
    scramble: string;
    date: number;
  }): Solve {
    return new Solve(
      new SolveId(primitives.id),
      new SolveTime(primitives.time),
      new UserId(primitives.userId),
      new Scramble(primitives.scramble),
      new SolveDate(primitives.date),
    );
  }
}
