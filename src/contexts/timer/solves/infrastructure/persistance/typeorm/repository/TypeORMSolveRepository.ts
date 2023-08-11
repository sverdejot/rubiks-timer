import { EntitySchema } from 'typeorm';
import Solve from '../../../../domain/entity/Solve';
import SolveRepository from '../../../../domain/repository/SolveRepository';
import TypeORMRepository from '../../../../../../shared/infrastructure/persistance/typeorm/Repository';
import { SolveSchema } from '../schema/Solve.schema';
import SolveId from '../../../../../../shared/domain/value-object/SolveId';

// TODO: remove await this.ds, ds should be a DataSource, not a Promise<DataSource>
export class TypeORMSolveRepository
  extends TypeORMRepository<Solve>
  implements SolveRepository
{
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
