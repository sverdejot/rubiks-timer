import { Inject } from '@nestjs/common';
import AggregateRoot from '../../../domain/aggregate-root';

import { DataSource, EntitySchema, Repository } from 'typeorm';

export default abstract class TypeORMRepository<T extends AggregateRoot> {
  private readonly ds: DataSource;
  protected readonly repository: Repository<T>;

  constructor(@Inject('ds') ds: DataSource) {
    console.log(ds);
    this.ds = ds;
    this.repository = this.ds.getRepository(this.getSchema());
  }

  protected abstract getSchema(): EntitySchema<T>;
}
