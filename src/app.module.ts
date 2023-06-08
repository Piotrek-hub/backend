import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostsModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/candao?directConnection=true&serverSelectionTimeoutMS=2000',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
