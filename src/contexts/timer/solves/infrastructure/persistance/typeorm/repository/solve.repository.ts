import { DataSource, EntitySchema } from 'typeorm';
import Solve from '../../../../domain/entity/solve.entity';
import SolveRepository from '../../../../domain/repository/solve.repository';
import TypeORMRepository from '../../../../../../shared/infrastructure/persistance/typeorm/repository';
import { SolveSchema } from '../schema/solve.schema';
import SolveId from '../../../../../../shared/domain/value-object/solve-id.value-object';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeORMSolveRepository
  extends TypeORMRepository<Solve>
  implements SolveRepository
{
  constructor(private dataSource: DataSource) {
    super(dataSource);
  }

  async save(solve: Solve): Promise<void> {
    await this.repository.save(solve);
  }

  async findAll(): Promise<Solve[]> {
    return await this.repository.find();
  }

  async find(id: SolveId): Promise<Solve | null> {
    return await this.repository
      .createQueryBuilder('solve')
      .where('solve.id = :id', { id: id.value })
      .getOne();
  }

  async delete(id: SolveId): Promise<void> {
    await this.repository
      .createQueryBuilder('solve')
      .delete()
      .where('solve.id = :id', { id: id.value })
      .execute();
  }

  protected getSchema(): EntitySchema<Solve> {
    return SolveSchema;
  }
}
