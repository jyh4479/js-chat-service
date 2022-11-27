import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TestController } from './controllers/test.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
