import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }

    loadTasks();
  }, []);

  return (
      <section className="bg-white dark:bg-neutral-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bienvenido a WorkSync</h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Tu herramienta para la gestión eficiente de tareas y proyectos</p>
          </div> 
          <div className="grid gap-8 lg:grid-cols-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          </div>
      </div>
      <p className="font-medium text-white text-center pb-10">Aplicación Web usando Django REST Framework y React CRUD</p>
    </section>
  );
}

