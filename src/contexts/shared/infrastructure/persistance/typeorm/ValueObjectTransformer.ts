import { NewableClass } from '../../../../shared/domain/NewableClass';
import {
  Primitives,
  ValueObject,
} from '../../../../shared/domain/value-object/ValueObject';

/* eslint-disable @typescript-eslint/no-explicit-any  */
export const ValueObjectTransformer = <T extends Primitives>(
  ValueObject: NewableClass<ValueObject<any>>,
) => {
  return {
    to: (value: ValueObject<T>): T => {
      return value.value;
    },
    from: (value: T): ValueObject<T> => {
      return new ValueObject(value);
    },
  };
};
