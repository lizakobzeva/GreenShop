import image15 from "../assets/image15.png";
import image14 from "../assets/image14.png";
function InformationBlock() {
  return (
    <section className="section container">
      <div className="informationBlock">
        <div className="informationBlock__item">
          <img src={image14} alt="" className="informationBlock__img" />
          <div className="informationBlock__text">
            <h4 className="informationBlock__title">
              Summer cactus <br />& succulents
            </h4>
            <p className="informationBlock__description">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button className="informationBlock__button button">
              Find More
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8126 8.79419H3.56258"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2748 4.27587C10.2748 4.27587 14.8123 6.72162 14.8123 8.79312C14.8123 10.8661 10.2748 13.3126 10.2748 13.3126"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="informationBlock__item">
          <img src={image15} alt="" className="informationBlock__img" />
          <div className="informationBlock__text">
            <h4 className="informationBlock__title">
              Summer cactus <br />& succulents
            </h4>
            <p className="informationBlock__description">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button className="informationBlock__button button">
              Find More
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8126 8.79419H3.56258"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2748 4.27587C10.2748 4.27587 14.8123 6.72162 14.8123 8.79312C14.8123 10.8661 10.2748 13.3126 10.2748 13.3126"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default InformationBlock;
