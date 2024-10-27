import { useContext } from "react";
import { storeContext } from "../context/Context";
import { twMerge } from "tailwind-merge";

const AddtoCartButton = ({ arg, className }) => {
  const { onAddCartItem } = useContext(storeContext);

  return (
    <button
      onClick={() => onAddCartItem(arg)}
      className={twMerge(
        "py-2 px-5 bg-black text-white rounded-full border border-black hover:bg-white hover:text-black duration-300",
        className
      )}
    >
      Add to cart
    </button>
  );
};

export default AddtoCartButton;
