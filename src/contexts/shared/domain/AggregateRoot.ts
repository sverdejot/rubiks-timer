import { Primitives } from './value-object/ValueObject';

export default abstract class AggregateRoot {
  abstract toPrimitives(): { [key: string]: Primitives };
}
