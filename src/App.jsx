import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import { useContext } from "react";
import { storeContext } from "./context/Context";
import Cart from "./components/Cart";
import { FaHome } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

const App = () => {
  const { cart, onChangeCategory } = useContext(storeContext);
  const categoriesArray = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  return (
    <Router>
      <main className="w-full h-screen grid grid-cols-5">
        <div className="sidebar col-span-1 bg-black flex flex-col gap-5  px-2 max-h-screen sticky top-0">
          <div className="w-full flex justify-evenly mt-4">
            <Link
              to={"/"}
              className="text-gray-300 py-2 px-5 inline-block font-bold hover:text-white"
              onClick={() => onChangeCategory("all-products")}
            >
              <FaHome className="text-3xl" />
            </Link>
            <Link
              to={"cart"}
              className="text-gray-300 py-2 px-5 inline-block font-bold hover:text-white relative"
            >
              <div className="w-4 h-4 bg-white rounded-full absolute -top-1 right-1 flex items-center justify-center text-black text-sm font-normal">
                <span>{cart.length}</span>
              </div>
              <FaCartPlus className="text-3xl" />
            </Link>
          </div>
          <div className="categories w-full flex flex-col  gap-5 text-white px-5 mt-5">
            <Link
              to={"/"}
              className="font-semibold py-1 px-1 rounded-md hover:bg-white hover:text-black cursor-pointer"
              onClick={() => onChangeCategory("all-products")}
            >
              View All
            </Link>
            {categoriesArray.map((cat) => {
              return (
                <Link
                  to={"/"}
                  key={cat}
                  className="font-semibold py-1 px-1 rounded-md hover:bg-white hover:text-black cursor-pointer"
                  onClick={() => onChangeCategory(cat, "/")}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="data col-span-4 bg-gray-200 h-screen overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
