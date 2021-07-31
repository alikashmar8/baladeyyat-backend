import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { NewsCategories } from './../common/enums/news-categories.enum';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true })
  image?: string;

  @Column({
    type: 'enum',
    enum: NewsCategories,
    default: [NewsCategories.GENERAL_NEWS],
  })
  categories: NewsCategories[];
}
