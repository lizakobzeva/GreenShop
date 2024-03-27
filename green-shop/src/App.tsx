import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Auth from "./components/Auth";
import { useAppSelector } from "./Redux/hook";
import { Route, Routes } from "react-router-dom";
import FullProduct from "./components/FullProduct";
import ShopBlock from "./components/ShopBlock";
import Releted from "./components/Releted";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const { OnAuthWindow } = useAppSelector((state) => state.auth);
  return (
    <div className="App">
      {OnAuthWindow && <Auth />}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop/:id" element={<FullProduct />} />

        <Route
          path="/shop/"
          element={
            <>
              <ShopBlock />
              <Releted />
            </>
          }
        />
        <Route path="/shop/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
