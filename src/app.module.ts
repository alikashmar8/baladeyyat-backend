import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { mailConfig } from './common/config/mailConfig';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      port: parseInt(process.env.TYPEORM_PORT),
      logging: process.env.TYPEORM_LOGGING === 'true',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['./dist/migrations/*{.ts,.js}'],
      migrationsRun: false,
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
      cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entities',
      },
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'frontend'),
    // }),
    MailerModule.forRoot(mailConfig),
    AuthModule,
    UsersModule,
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
