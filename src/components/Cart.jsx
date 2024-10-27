import { useContext } from "react";
import { storeContext } from "../context/Context";
import EmptyCart from "./EmptyCart";
import BackButton from "./BackButton";

const Cart = () => {
  const {
    cart,
    onRemoveAllCartItems,
    onIncreaseQty,
    onDecreaseQty,
    onRemoveItem,
  } = useContext(storeContext);

  return !cart.length ? (
    <EmptyCart />
  ) : (
    <div className="w-full grid grid-cols-2 ">
      <div className="col-span-2 bg-black text-white flex gap-5 font-bold px-10 w-full h-16 items-center">
        <h3>Cart Items</h3>
        <h3 onClick={onRemoveAllCartItems} className="cursor-pointer">
          Remove All Items
        </h3>
        <h3>
          Total Price : $
          {cart
            .reduce((acc, curr) => (acc += curr.price * curr.qty), 0)
            .toFixed(2)}
        </h3>
      </div>
      <div className="cart-items-list col-span-3 grid grid-cols-4 gap-3 px-20 pt-10 relative">
        <BackButton className={"left-2 top-2"} />
        {cart.map((item, i) => {
          return (
            <div
              key={i}
              className="p-4 shadow-md bg-white rounded-xl flex flex-col justify-between hover:bg-gray-100 duration-200"
            >
              <h2 className="font-bold">
                {item.title.split(" ").slice(0, 3).join(" ")}
              </h2>
              <div className="w-[35%] mx-auto mt-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mix-blend-multiply"
                />
              </div>
              <p className="text-sm text-gray-700 text-justify mt-4">
                {item.description.split(" ").slice(0, 10).join(" ") + " ..."}
              </p>
              <div className="w-full flex justify-between mt-4">
                <p>Price : {(item.qty * item.price).toFixed(2)}</p>
                <div className="flex w-[40%] items-center justify-between gap-2">
                  <button
                    onClick={() => onDecreaseQty(item)}
                    className="w-8 h-8 bg-black rounded-full text-white cursor-pointer"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => onIncreaseQty(item)}
                    className="w-8 h-8 bg-black rounded-full text-white cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between mt-4">
                <button className="py-2 px-4 bg-black text-white rounded-full">
                  BUY NOW
                </button>
                <button
                  onClick={() => onRemoveItem(item)}
                  className="py-2 px-4 bg-gray-200 rounded-full"
                >
                  REMOVE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
