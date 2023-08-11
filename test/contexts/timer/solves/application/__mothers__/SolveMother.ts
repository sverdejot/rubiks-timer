import SolveId from 'src/contexts/shared/domain/value-object/SolveId';
import UserId from 'src/contexts/shared/domain/value-object/UserId';
import SolveCreatorRequest from 'src/contexts/timer/solves/application/request/SolveCreatorRequest';
import Solve from 'src/contexts/timer/solves/domain/entity/Solve';
import Scramble from 'src/contexts/timer/solves/domain/value-object/Scramble';
import SolveDate from 'src/contexts/timer/solves/domain/value-object/SolveDate';
import SolveTime from 'src/contexts/timer/solves/domain/value-object/SolveTime';
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
