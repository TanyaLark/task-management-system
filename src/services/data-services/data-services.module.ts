import { Module } from "@nestjs/common";
import { MongoDataServicesModule } from "src/frameworks/data-services/mongo/mongo-data-servises.module";
import { SqlDataServicesModule } from "src/frameworks/data-services/sql/sql-data-services.module";

@Module({
  // imports: [MongoDataServicesModule],
  // exports: [MongoDataServicesModule],
  imports: [SqlDataServicesModule],
  exports: [SqlDataServicesModule],
})
export class DataServicesModule {}