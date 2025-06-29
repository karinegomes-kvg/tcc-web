// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module'; // Importe aqui

@Module({
  imports: [PrismaModule, TasksModule], // Adicione aqui
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}