import { Timestamp } from 'bson';
import { ValueObject } from '../../../../shared/domain/value-object/ValueObject';

export default class SolveTime extends ValueObject<number> {
  constructor(value: number) {
    const valid = Timestamp.fromNumber(value);
    super(valid.toNumber());
  }

  public static fromDate(date: Date): SolveTime {
    return new SolveTime(date.getTime());
  }

  public equals(other: ValueObject<number>): boolean {
    if (!(other instanceof SolveTime)) {
      return false;
    }
    return this.value === other.value;
  }
}
