/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LogDocument = HydratedDocument<Log>;

@Schema()
export class Log {
  @Prop()
  content: string;

  @Prop()
  createdAt: Date;

}

export const LogSchema = SchemaFactory.createForClass(Log);