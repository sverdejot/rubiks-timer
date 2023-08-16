import { registerAs } from '@nestjs/config';
//import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

//const TYPEORM_CONFIG_FILE = 'typeorm.config.yaml';

const typeormConfig = yaml.load(
  `
db:
sqlite:
  database: ':memory:'
mysql:
  host: localhost
  port: 3306
  user: root
  password: root
  db_name: timer
`,
) as Record<string, any>;

export default registerAs('timer', () => ({
  ...typeormConfig,
}));
