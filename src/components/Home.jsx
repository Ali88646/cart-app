import { useContext } from "react";
import { storeContext } from "../context/Context";
import { Link } from "react-router-dom";
import AddtoCartButton from "./AddtoCartButton";
import Loading from "./Loading";

const Home = () => {
  const {
    productData,
    inputVal,
    onChangeInputVal,
    onSubmittingInputQuery,
    isLoading,
  } = useContext(storeContext);

  return (
    <div className="w-full px-12 ">
      <div className="w-full h-[5rem] flex justify-between items-center  sticky top-0 bg-gray-200 z-10">
        <h3 className="text-3xl">The Smart Store</h3>
        <input
          type="text"
          placeholder="Search Products"
          className="w-[35%]  rounded-full px-4 py-2 outline-none text-sm "
          value={inputVal}
          onChange={(e) => onChangeInputVal(e)}
          onKeyDown={(e) => onSubmittingInputQuery(e)}
        />
      </div>
      {isLoading ? (
        <div className="w-full h-[calc(100vh-5rem)] flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="w-full grid grid-cols-6 gap-2 mt-8 ">
          {productData.map((item) => (
            <div
              key={item.id}
              className=" bg-white p-2 rounded-lg flex flex-col justify-between hover:bg-gray-100 duration-200"
            >
              <Link
                to={`product/${item.id}`}
                className="rounded-lg flex flex-col justify-between"
              >
                <h2 className="text-sm text-dark-800 text-center">
                  {item.title.split(" ").slice(0, 3).join(" ")}
                </h2>
                <div className="w-full mt-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[60%] mx-auto mix-blend-multiply"
                  />
                </div>
                <div className="w-full flex justify-between mt-4 text-sm">
                  <p>Price : {item.price}</p>
                  <p>Rating : {item.rating.rate}</p>
                </div>
              </Link>
              <AddtoCartButton arg={item} className={"py-1 mt-2 "} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
