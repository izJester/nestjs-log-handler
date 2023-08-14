import { Content } from '../../interfaces/content.interface';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class LogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'json'})
  content: Content;

  @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
  createdAt: Date;

  // Agrega más propiedades si es necesario
}