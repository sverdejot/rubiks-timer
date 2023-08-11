export default class InvalidScrambleException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidScrambleException';
  }
}
