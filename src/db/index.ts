import ormconfig from "../../ormconfig";
import { DataSource, EntityTarget, Repository } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

// class DbManager {
//   public datasource: DataSource;

//   constructor() {
//     this.datasource = new DataSource({
//       ...ormconfig,
//       type: 'postgres',
//     //   type: 'mysql',
//       logger: 'simple-console'
//     });
//   }

//   async init() {
//     await this.datasource
//       .initialize()
//       .then(() => console.log('Database connected'))
//       .catch((error) => console.log('Something went wrong while connecting database', error));
//   }

//   getRepository(repo: EntityTarget<any>): Repository<any> {
//     return this.datasource.getRepository(repo);
//   }
// }

// export default new DbManager();

export const PostgresDataSource = new DataSource({
  ...ormconfig,
  type: "postgres",
  logger: "simple-console",
});

export const MysqlDataSource = new DataSource({
  ...ormconfig,
  type: "mysql",
  logger: "simple-console",
});
