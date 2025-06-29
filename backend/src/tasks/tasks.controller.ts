// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task as TaskModel } from '@prisma/client';

// Opcional, mas recomendado: DTO (Data Transfer Object) para validação
// Crie src/tasks/dto/create-task.dto.ts
// import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
// export class CreateTaskDto {
//   @IsString() @IsNotEmpty() title: string;
//   @IsString() @IsOptional() description?: string;
// }

@Controller('tasks') // Endpoint base: /tasks
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get() // GET /tasks 
  async findAll(): Promise<TaskModel[]> {
    return this.tasksService.findAll();
  }

  @Post() // POST /tasks 
  async create(@Body() createTaskData: { title: string; description?: string }): Promise<TaskModel> {
    // Se usar DTO: @Body() createTaskDto: CreateTaskDto
    return this.tasksService.create(createTaskData);
  }

  @Delete(':id') // DELETE /tasks/:id 
  async remove(@Param('id', ParseIntPipe) id: number): Promise<TaskModel> {
    return this.tasksService.remove(id);
  }
}