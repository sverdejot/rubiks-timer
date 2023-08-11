import { TypeORMConfig } from './Config';
import config from '../../../../timer/shared/config';

export class TypeORMConfigFactory {
  public static createConfig(): TypeORMConfig {
    return {
      host: config.get('typeorm.host'),
      port: config.get('typeorm.port'),
      username: config.get('typeorm.username'),
      password: config.get('typeorm.password'),
      database: config.get('typeorm.database'),
    };
  }
}
