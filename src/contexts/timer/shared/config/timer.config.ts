import { registerAs } from '@nestjs/config';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

const TYPEORM_CONFIG_FILE = 'typeorm.config.yaml';

const typeormConfig = yaml.load(
  readFileSync(`${__dirname}/persistance/${TYPEORM_CONFIG_FILE}`, 'utf-8'),
) as Record<string, any>;

export default registerAs('timer', () => ({
  ...typeormConfig,
}));
