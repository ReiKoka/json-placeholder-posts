import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="mx-auto h-[calc(100%-3.5rem)] w-full max-w-full overflow-auto bg-indigo-50">
      <Outlet />
    </main>
  );
}

export default Main;
