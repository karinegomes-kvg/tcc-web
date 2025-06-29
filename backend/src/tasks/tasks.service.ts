// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Importa o serviço Prisma
import { Task, Prisma } from '@prisma/client'; // Importa os tipos 'Task' e 'Prisma' gerados pelo Prisma
                                              // 'Task' é o modelo do seu schema.prisma
                                              // 'Prisma' contém tipos úteis como 'TaskCreateInput'

// Não precisamos mais desta interface nem do array em memória
// export interface Task {
//   id: number;
//   name: string;
// }

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {} // Injeta o PrismaService no construtor

  // Método para obter todas as tarefas (Endpoint GET /tasks)
  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany(); // Usa o Prisma para buscar todas as tarefas do DB
  }

  // Método para criar uma nova tarefa (Endpoint POST /tasks)
  // 'data' deve ser do tipo Prisma.TaskCreateInput
  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data, // Passa os dados para o Prisma criar a tarefa no DB
    });
  }

  // Método para remover uma tarefa por ID (Endpoint DELETE /tasks/:id)
  async remove(id: number): Promise<Task> { // Retorna a tarefa removida
    // Certifique-se de que o 'id' seja um número inteiro para a busca no DB
    return this.prisma.task.delete({
      where: { id: Number(id) }, // Filtra pela ID para remover do DB
    });
  }
}