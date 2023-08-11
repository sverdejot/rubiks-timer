import { EntitySchema } from 'typeorm';
import Solve from '../../../../domain/entity/Solve';
import SolveId from '../../../../../../shared/domain/value-object/SolveId';
import SolveTime from '../../../../domain/value-object/SolveTime';
import UserId from '../../../../../../shared/domain/value-object/UserId';
import Scramble from '../../../../domain/value-object/Scramble';
import SolveDate from '../../../../domain/value-object/SolveDate';
import { ValueObjectTransformer } from '../../../../../../shared/infrastructure/persistance/typeorm/ValueObjectTransformer';

export const SolveSchema = new EntitySchema<Solve>({
  name: 'Solve',
  tableName: 'solve',
  target: Solve,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: ValueObjectTransformer(SolveId),
    },
    time: {
      type: Number,
      transformer: ValueObjectTransformer(SolveTime),
    },
    userId: {
      name: 'user_id',
      type: String,
      transformer: ValueObjectTransformer(UserId),
    },
    scramble: {
      type: String,
      transformer: ValueObjectTransformer(Scramble),
    },
    date: {
      type: Number,
      transformer: ValueObjectTransformer(SolveDate),
    },
  },
});
