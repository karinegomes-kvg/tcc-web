// frontend/src/App.tsx
import { useState, useEffect } from 'react';
import './App.css'; // Ou remova se não for usar estilos específicos

// Defina uma interface para o tipo Task que vem do seu backend
interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string; // Ou Date, se você for parsear
  updatedAt: string; // Ou Date
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const BACKEND_URL = 'http://localhost:3000'; // URL do seu backend NestJS

  // Função para buscar as tarefas do backend
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/tasks`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Task[] = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // Carrega as tarefas quando o componente é montado
  useEffect(() => {
    fetchTasks();
  }, []); // Array de dependências vazio para rodar apenas uma vez

  // Função para adicionar uma nova tarefa
  const handleAddTask = async (event: React.FormEvent) => {
    event.preventDefault(); // Previne o recarregamento da página

    if (!newTaskTitle.trim()) { // Garante que o título não esteja vazio
      alert('O título da tarefa não pode ser vazio!');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTaskTitle }), // Envia apenas o título
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Após adicionar, busca a lista atualizada de tarefas
      setNewTaskTitle(''); // Limpa o campo do formulário
      fetchTasks();
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  // Função para remover uma tarefa
  const handleDeleteTask = async (id: number) => {
    try {
      const response = await fetch(`${BACKEND_URL}/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Após remover, busca a lista atualizada de tarefas
      fetchTasks();
    } catch (error) {
      console.error("Erro ao remover tarefa:", error);
    }
  };

  return (
    <div className="App">
      <h1>Minhas Tarefas</h1>

      {/* Formulário para adicionar nova tarefa */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <h2>Lista de Tarefas</h2>
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: '10px' }}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;