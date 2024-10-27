import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
const BackButton = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className={twMerge(
        "absolute top-5 left-5 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:bg-gray-800 hover:scale-105 duration-200 ease hover:text-xl",
        className
      )}
    >
      <IoIosArrowBack />
    </div>
  );
};

export default BackButton;
