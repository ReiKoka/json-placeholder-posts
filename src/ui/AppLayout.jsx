import { Toaster } from "sonner";
import Header from "../components/Header";
import Main from "./../components/Main";

function AppLayout() {
  return (
    <div className="mx-auto h-dvh w-full max-w-7xl">
      <Header />
      <Main />
      <Toaster position="top-center" richColors/>
    </div>
  );
}

export default AppLayout;
