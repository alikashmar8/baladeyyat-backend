import { NewsCategories } from './../../common/enums/news-categories.enum';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class StoreNewsDTO {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  description?: string;

  @IsNotEmpty()
  @ApiProperty({
    enum: NewsCategories,
    enumName: 'NewsCategories',
    items: { $ref: getSchemaPath('NewsCategories') },
    isArray: true,
  })
  categories: NewsCategories[];

  image?: any;


}
