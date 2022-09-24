import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvenementModule } from './evenement/evenement.module';

@Module({
  imports: [EvenementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
