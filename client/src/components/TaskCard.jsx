import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    // <div
    // className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

    // >
    //   <h1 className="font-bold uppercase">{task.title}</h1>
    //   <p className="text-slate-400">{task.description}</p>
    // </div>

    <article
      className="p-6 rounded-lg shadow-md bg-neutral-800 border-gray-700 hover:bg-zinc-950 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{task.title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {task.description}
      </p>
    </article>
  );
}
