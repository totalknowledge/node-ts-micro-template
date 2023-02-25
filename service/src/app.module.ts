import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ticket } from './ticket.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqljs',
      synchronize: true,
      entities: [Ticket],
    }),
    TypeOrmModule.forFeature([Ticket]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
