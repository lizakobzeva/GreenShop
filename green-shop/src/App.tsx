import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Auth from "./components/Auth";
import { useAppSelector } from "./Redux/hook";
import { Route, Routes } from "react-router-dom";
import FullProduct from "./components/FullProduct";

function App() {
  const { OnAuthWindow } = useAppSelector((state) => state.auth);
  return (
    <div className="App">
      {OnAuthWindow && <Auth />}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop/:id" element={<FullProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
