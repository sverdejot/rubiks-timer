import SolveTime from '../value-object/SolveTime';
import UserId from '../../../../shared/domain/value-object/UserId';
import Scramble from '../value-object/Scramble';
import SolveDate from '../value-object/SolveDate';
import SolveId from '../../../../shared/domain/value-object/SolveId';
import AggregateRoot from '../../../../shared/domain/AggregateRoot';
import { Primitives } from '../../../../shared/domain/value-object/ValueObject';

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
