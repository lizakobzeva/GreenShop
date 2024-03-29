import bannerImg from "../assets/bannerImg.png";

function Banner() {
  return (
    <section className="section container">
      <div className="section-body">
        <div className="banner">
          <div className="banner__contant">
            <h2 className="banner__title-main">Программа Лояльности</h2>
            <span className="banner__title-main--accent">"Сберпорт"</span>
            <p className="banner__description">
              Узнавайте информацию о партнёрах "СберПорта", находите их на
              карте,
              <br /> получайте скидки и бонусы!
            </p>
            <button className="button banner__button">Начать</button>
          </div>
          <img src={bannerImg} alt="" className="banner__image" />
        </div>
      </div>
    </section>
  );
}
export default Banner;
