import convict from 'convict';

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['prod', 'dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV',
  },
  typeorm: {
    doc: 'Config related to TypeORM',
    engine: {
      doc: 'DB Engine used by TypeORM',
      format: ['mysql'],
      default: 'mysql',
    },
    host: {
      format: String,
      env: 'DB_HOST',
      default: 'localhost',
    },
    port: {
      format: Number,
      env: 'DB_PORT',
      default: 3306,
    },
    username: {
      format: String,
      env: 'DB_USERNAME',
      default: 'root',
    },
    password: {
      format: String,
      sensitive: true,
      env: 'DB_PASSWORD',
      default: '',
    },
    database: {
      format: String,
      env: 'DB_NAME',
      default: 'timer',
    },
  },
}).validate({ allowed: 'strict' });

config.loadFile([
  `${__dirname}/config.default.json`,
  `${__dirname}/config.${config.get('env')}.json`,
]);

export default config;
