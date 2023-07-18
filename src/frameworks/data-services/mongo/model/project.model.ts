import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
