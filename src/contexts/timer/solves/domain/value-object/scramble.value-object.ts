import { ValueObject } from '../../../../shared/domain/value-object/value-object';
import InvalidScrambleException from '../errors/invalid-scramble.error';

const validateScramble = (scramble: string): boolean => {
  return RegExp(
    /^(?!.*(FB|F2B|F'B|F2B2|RL|R2L|R'L|R2L2|UD|U2D|U'D|U2D2|xy|x2y|x'y|x2y2|yz|y2z|y'z|y2z2|zx|z2x|z'x|z2x2))([FBRLUDxyz]['2]? ?)*$/,
  ).test(scramble);
};

export default class Scramble extends ValueObject<string> {
  constructor(readonly value: string) {
    if (!validateScramble(value)) {
      throw new InvalidScrambleException('Invalid scramble');
    }
    super(value);
  }

  public equals(other: ValueObject<string>): boolean {
    if (!(other instanceof Scramble)) {
      return false;
    }
    return this.value === other.value;
  }
}
