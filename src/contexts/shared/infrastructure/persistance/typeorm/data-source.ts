import { DataSource } from 'typeorm';

// TODO: factory pattern
export default class TypeORMSource {
  static async createDataSource(): Promise<DataSource> {
    console.log('creating data source');
    const ds = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      entities: [
        `${__dirname}/../../../../../../../src/contexts/*/*/infrastructure/persistance/typeorm/schema/*.schema.{js,ts}`,
      ],
      synchronize: true,
    });
    return await ds.initialize();
  }
}
