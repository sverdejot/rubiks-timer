import { DataSource } from 'typeorm';
import SolveMother from '../../../../application/__mothers__/solve-mother';
import { TypeORMSolveRepository } from 'src/contexts/timer/solves/infrastructure/persistance/typeorm/repository/solve.repository';

describe('save solve to database', () => {
  let dataSource: DataSource;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      entities: [
        `${__dirname}/../../../../../../../../src/contexts/*/*/infrastructure/persistance/typeorm/schema/*.schema.{js,ts}`,
      ],
      synchronize: true,
    });

    dataSource = await dataSource.initialize();

    console.info(`Initialized database at ${dataSource.options.database}`);
    console.info(
      `Looking for entites at ${__dirname}/../../../../../../../../src/contexts/*/*/infrastructure/persistance/typeorm/schema/*.schema.{js,ts}`,
    );
    console.info(
      `Found ${
        dataSource.entityMetadatas.length
      } entites: [ ${dataSource.entityMetadatas
        .map((e) => e.name)
        .join(', ')} ]`,
    );
  });

  it('should save solve to database', async () => {
    // given
    const solve = SolveMother.random();
    const repository = new TypeORMSolveRepository(dataSource);

    // when
    await repository.save(solve);

    // then
    console.info(`Finding Solve [id:${solve.id}] in database`);
    const savedSolve = await repository.find(solve.id);
    expect(savedSolve).toEqual(solve);
  });
});
