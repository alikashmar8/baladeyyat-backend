module.exports = {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: parseInt(process.env.TYPEORM_PORT),
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['./dist/migrations/*{.ts,.js}'],
    migrationsRun: false,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    cli: {
      migrationsDir: 'src/migrations',
      entitiesDir: 'src/entities',
    },
  };
  