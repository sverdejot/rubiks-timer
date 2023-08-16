import { ApiProperty } from '@nestjs/swagger';

export class CreateSolveRequest {
  @ApiProperty({
    description: 'The time taken to solve the cube (ms).',
    type: Number,
    minimum: 0,
  })
  time: number;

  @ApiProperty({
    description: 'Date when the solve was recorded (timestamp)',
    type: Number,
    minimum: 0,
  })
  date: number;

  @ApiProperty({
    description: 'Id of the user who recorded the solve (UUID)',
    type: String,
    examples: [
      '1490d29a-e6a9-48da-9e5f-f40e0d1572f8',
      'ac3d0d7e-ab27-4132-bbac-f0c79c7fcb62',
      '96fabd74-bc98-4e4c-ab47-a8d6f0ab28ef',
      'e30382e7-729a-4c41-9207-cf2c5e2064cd',
      '80da0be3-95ae-4d34-8d2e-0f8608b2fa9b',
      '51981d83-6ca9-4792-831e-269c19bd0b17',
      'b78ae803-95ab-4953-91ef-46b8f28a9297',
      '4bf82210-28d1-413c-8013-9635c1face41',
      'cf7243ec-3ed7-44da-a106-738c532bdc56',
    ],
  })
  userId: string;

  @ApiProperty({
    description: 'Scramble used to mix the cube',
    type: String,
  })
  scramble: string;
}
