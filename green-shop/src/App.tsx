import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Auth from "./components/Auth";
import { useAppSelector } from "./Redux/hook";

function App() {
  const { OnAuthWindow } = useAppSelector((state) => state.auth);
  return (
    <div className="App">
      {OnAuthWindow && <Auth />}
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
