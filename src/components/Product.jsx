import { useContext } from "react";
import { useParams } from "react-router-dom";
import { storeContext } from "../context/Context";
import BackButton from "./BackButton";
import AddtoCartButton from "./AddtoCartButton";
import Loading from "./Loading";

const Product = () => {
  const { id } = useParams();
  const { productData, isLoading } = useContext(storeContext);
  const [product] = productData.filter((item) => item.id === Number(id));
  return (
    <div className="w-full relative">
      {isLoading ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <BackButton className={"top-2 left-2"} />
          <div className="w-2/3 flex mx-auto  pt-20">
            <div className="mx-auto w-1/2 p-10">
              <img
                src={product.image}
                alt={product.title}
                className="mix-blend-multiply w-full mx-auto"
              />
            </div>
            <div className="product w-1/2 mx-auto pt-32">
              <h2 className="text-3xl text-dark-800 font-bold">
                {product.title}
              </h2>

              <p className="text-dark-700 mt-4">{product.description}</p>
              <div className="w-full flex items-center  gap-4 mt-4">
                <p className="py-2 px-5 bg-white rounded-full border border-white">
                  Price : {product.price}
                </p>
                <AddtoCartButton arg={product} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
