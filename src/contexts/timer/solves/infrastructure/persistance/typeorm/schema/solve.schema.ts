import { EntitySchema } from 'typeorm';
import Solve from '../../../../domain/entity/solve.entity';
import SolveId from '../../../../../../shared/domain/value-object/solve-id.value-object';
import SolveTime from '../../../../domain/value-object/solve-time.value-object';
import UserId from '../../../../../../shared/domain/value-object/user-id.value-object';
import Scramble from '../../../../domain/value-object/scramble.value-object';
import SolveDate from '../../../../domain/value-object/solve-date.value-object';
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
