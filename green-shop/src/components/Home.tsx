import Banner from "./Banner";
import ShopBlock from "./ShopBlock";
import InformationBlock from "./InformationBlock";
import Blog from "./Blog";
function Home() {
  return (
    <main className="content">
      <Banner />

      <ShopBlock />

      <InformationBlock />

      <Blog />
    </main>
  );
}
export default Home;
