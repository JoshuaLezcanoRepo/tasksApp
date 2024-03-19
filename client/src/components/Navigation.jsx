import { Link } from "react-router-dom";

export function Navigation() {
  return (
    // <div className='flex justify-between py-3'>
    //     <Link to="/tasks">
    //         <h1 className='font-bold text-3xl mb-4'>Task App</h1>
    //     </Link>
    //     <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
    //       <Link to="/tasks-create">Create Task</Link>
    //     </button>
    // </div>

    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-neutral-900 text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <Link to="/tasks">
          <h1 className="font-medium text-xl m-4">WorkSync</h1>
        </Link>
        <button className="bg-zinc-800 px-3 py-2 rounded-lg">
          <Link to="/tasks-create">Crear Tarea</Link>
        </button>
      </nav>
    </header>
  );
}
