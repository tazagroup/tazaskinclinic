import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KhachhangModule } from './khachhang/khachhang.module';

@Module({
  imports: [KhachhangModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
