import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreNewsDTO } from './dtos/store-news.dto';
import { UpdateNewsDTO } from './dtos/update-news.dto';
import { News } from './news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async findAll(): Promise<News[]> {
    return await this.newsRepository.find();
  }

  async store(newsDTO: StoreNewsDTO) {
    const news: News = this.newsRepository.create(newsDTO);
    await this.newsRepository.save(news);
    return news;
  }

  async update(id: string, data: UpdateNewsDTO) {
    return await this.newsRepository.update(id, data);
  }

  async findByIdOrFail(id: string) {
    return await this.newsRepository.findOneOrFail(id).catch((error) => {
      throw new HttpException('News not found', HttpStatus.BAD_REQUEST);
    });
  }

  async delete(id: string) {
    return await this.newsRepository.delete(id);
  }
}
