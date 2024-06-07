import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="mx-auto w-full max-w-full h-[calc(100%-80px)] overflow-auto bg-indigo-50">
      <Outlet />
    </main>
  );
}

export default Main;
