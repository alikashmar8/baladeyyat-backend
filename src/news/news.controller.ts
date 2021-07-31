import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { createWriteStream } from 'fs';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { StoreNewsDTO } from './dtos/store-news.dto';
import { UpdateNewsDTO } from './dtos/update-news.dto';
import { NewsService } from './news.service';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe())
  async store(
    @Body() newsDTO: StoreNewsDTO,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(image.mimetype))
        throw new BadRequestException('File must be an image file');
      let filename = image.originalname.replace(/\s/g, '');
      filename = Date.now() + '-' + filename;

      const ws = createWriteStream('uploads/' + filename);
      ws.write(image.buffer);
      newsDTO.image = filename;
    }
    return await this.newsService.store(newsDTO);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') id: string,
    @Body() newsDTO: UpdateNewsDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    newsDTO.image = file.originalname;
    return await this.newsService.update(id, newsDTO);
  }

  @Get(':id')
  async getOneById(@Param('id') id: string) {
    return await this.newsService.findByIdOrFail(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.newsService.delete(id);
  }
}
