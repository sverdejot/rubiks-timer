import { ValueObject } from '../../../../shared/domain/value-object/value-object';

export default class UserName extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  equals(other: ValueObject<string>): boolean {
    if (other instanceof UserName) return other === this;
    return false;
  }
}
