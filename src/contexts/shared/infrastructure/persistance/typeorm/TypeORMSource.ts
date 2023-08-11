import { DataSource } from 'typeorm';
import { TypeORMConfig } from './Config';

// TODO: factory pattern
export default class TypeORMSource {
  static async createDataSource(config: TypeORMConfig): Promise<DataSource> {
    const ds = await new DataSource({
      type: 'sqlite',
      synchronize: true,
      entities: [
        `${__dirname}/../../../../*/*/infrastructure/persistance/typeorm/schema/*.schema{.ts,.js}`,
      ],
      ...config,
    }).initialize();
    return ds;
  }
}
