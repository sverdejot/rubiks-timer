import { EntitySchema } from 'typeorm';
import Solve from '../../../../domain/entity/solve';
import SolveId from '../../../../../../shared/domain/value-object/solve-id';
import SolveTime from '../../../../domain/value-object/solve-time';
import UserId from '../../../../../../shared/domain/value-object/user-id';
import Scramble from '../../../../domain/value-object/scramble';
import SolveDate from '../../../../domain/value-object/solve-date';
import { ValueObjectTransformer } from '../../../../../../shared/infrastructure/persistance/typeorm/value-object-transformer';

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
