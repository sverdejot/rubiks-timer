import { registerAs } from '@nestjs/config';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export default registerAs('timer', () => ({
  ...(yaml.load(
    readFileSync(`${__dirname}/persistance/typeorm.config.yaml`, 'utf-8'),
  ) as Record<string, any>),
}));
