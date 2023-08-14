import SolveId from 'src/contexts/shared/domain/value-object/solve-id.value-object';
import UserId from 'src/contexts/shared/domain/value-object/user-id.value-object';
import SolveCreatorRequest from 'src/contexts/timer/solves/application/request/solve-creator.request';
import Solve from 'src/contexts/timer/solves/domain/entity/solve.entity';
import Scramble from 'src/contexts/timer/solves/domain/value-object/scramble.value-object';
import SolveDate from 'src/contexts/timer/solves/domain/value-object/solve-date.value-object';
import SolveTime from 'src/contexts/timer/solves/domain/value-object/solve-time.value-object';
import { v4 } from 'uuid';

export default class SolveMother {
  public static fromRequest(request: SolveCreatorRequest): Solve {
    return new Solve(
      new SolveId(request.id),
      SolveTime.fromDate(new Date(request.time)),
      new UserId(request.userId),
      new Scramble(request.scramble),
      SolveDate.fromDate(new Date(request.date)),
    );
  }

  // TODO: builder pattern w/ solve
  public static withId(id: string): Solve {
    return new Solve(
      new SolveId(id),
      SolveTime.fromDate(new Date(Date.now())),
      new UserId('e30382e7-729a-4c41-9207-cf2c5e2064cd'),
      new Scramble("F R' U2 B D' L2 F' R B' D L2 U"),
      SolveDate.fromDate(new Date(Date.now())),
    );
  }

  public static random(): Solve {
    return new Solve(
      new SolveId(v4()),
      SolveTime.fromDate(new Date(Date.now())),
      new UserId('e30382e7-729a-4c41-9207-cf2c5e2064cd'),
      new Scramble("F R' U2 B D' L2 F' R B' D L2 U"),
      SolveDate.fromDate(new Date(Date.now())),
    );
  }
}
