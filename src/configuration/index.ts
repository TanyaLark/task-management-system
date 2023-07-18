import { ProjectSchema } from "src/frameworks/data-services/sql/model/project.schema";
import { TaskSchema } from "src/frameworks/data-services/sql/model/task.schema";
import { UserSchema } from "src/frameworks/data-services/sql/model/user.schema";

require('dotenv').config();

export const MONGO_DATA_BASE_CONFIGURATION = {
  mongoConnectionString: process.env
    .CLEAN_NEST_MONGO_CONNECTION_STRING as string,
};

export const SQL_DATA_BASE_CONFIGURATION = {
  type: 'postgres' as any,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ProjectSchema, UserSchema, TaskSchema],
  migrations: [],
  synchronize: true,
};
