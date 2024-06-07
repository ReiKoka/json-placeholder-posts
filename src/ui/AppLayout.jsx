import { useNavigation } from "react-router-dom";
import { Toaster } from "sonner";

import Header from "../components/Header";
import Main from "./../components/Main";
import Loader from "./../components/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="mx-auto h-dvh w-full max-w-[90rem] overflow-auto">
      {isLoading && <Loader />}

      <Header />
      <Main />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default AppLayout;
