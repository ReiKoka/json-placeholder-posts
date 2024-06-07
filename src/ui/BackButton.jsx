import { HiArrowLeft } from "react-icons/hi";
import { useMoveBack } from "./../hooks/useMoveBack";

function BackButton() {
  const moveBack = useMoveBack();
  return (
    <button onClick={moveBack}>
      <HiArrowLeft className="h-6 w-6 hover:text-indigo-700" />
    </button>
  );
}

export default BackButton;
