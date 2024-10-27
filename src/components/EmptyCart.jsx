import BackButton from "./BackButton";

const EmptyCart = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <BackButton />
      <div className="w-1/4">
        <img src="public/empty-cart.png" alt="empty-cart" className="w-full" />
      </div>
    </div>
  );
};

export default EmptyCart;
