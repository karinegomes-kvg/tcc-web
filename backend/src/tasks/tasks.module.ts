import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importe o PrismaModule

@Module({
  imports: [PrismaModule], // Adicione aqui
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
