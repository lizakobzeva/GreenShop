import bannerImg from "../assets/bannerImg.png";

function Banner() {
  return (
    <section className="section container">
      <div className="section-body">
        <div className="banner">
          <div className="banner__contant">
            <h3 className="banner__title-top">Welcome to GreenShop</h3>
            <h2 className="banner__title-main">
              Let’s Make a Better
              <span className="banner__title-main--accent">Planet</span>
            </h2>
            <p className="banner__description">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <button className="button banner__button">SHOP NOW</button>
          </div>
          <img src={bannerImg} alt="" className="banner__image" />
        </div>
      </div>
    </section>
  );
}
export default Banner;
