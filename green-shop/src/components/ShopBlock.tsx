import { useEffect, useState } from "react";
import SuperSaleBanner from "../assets/SuperSaleBanner.jpg";
import Product from "./Product";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../firebase";

type PlantsType = {
  title: string;
  price: string;
  image: number;
  id: string;
};

function ShopBlock() {
  const [Plants, setPlants] = useState<Array<PlantsType>>([
    { title: "", price: "", image: 0, id: "" },
  ]);

  const db = getFirestore(app);

  useEffect(() => {
    const PlantsArray: Array<PlantsType> = [];
    async function FetchPlants(): Promise<void> {
      const PlantsData = await getDocs(collection(db, "Plants"));
      PlantsData.forEach((doc) => {
        const item = {
          title: doc.data().title,
          price: doc.data().price,
          image: doc.data().image,
          id: doc.id,
        };
        PlantsArray.push(item);
      });

      await setPlants(PlantsArray);
    }
    FetchPlants();
  }, [db]);

  return (
    <section className="section container">
      <div className="shopBlock">
        <div className="shopBlockNav">
          <div className="shopBlockNav__content">
            <h4 className="shopBlockNav__title">Категории</h4>
            <ul className="shopBlockNav__list">
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">Рестораны</span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">Кафе</span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">
                  Образование
                </span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">Отдых</span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">Здоровье</span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">Красота</span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">Спорт</span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">Магазин</span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
              <li className="shopBlockNav__item">
                <span className="shopBlockNav__categories-name">
                  Путешествие
                </span>
                <span className="shopBlockNav__categories-count">(33)</span>
              </li>
            </ul>

            <h4 className="shopBlockNav__title">Средний чек</h4>
            <div className="shopBlockNav__price-list">
              <img className="shopBlockNav__item" src="" alt="" />
              <span className="shopBlockNav__item">
                Price:
                <span className="shopBlockNav__item--accent">$39 - $1230</span>
              </span>
              <button className="button shopBlockNav__item">Filter</button>
            </div>
          </div>
          <img className="shopBlockNav__img" src={SuperSaleBanner} alt="" />
        </div>

        <div className="shopBlockContent">
          <div className="shopBlockContent__header">
            <div className="shopBlockContent__filter">
              <ul className="shopBlockContent__list">
                <li className="shopBlockContent__item">Подходящие партнеры:</li>
              </ul>
            </div>
            <div className="shopBlockContent__sorting">
              <input
                className="shopBlockContent__input"
                type="text"
                placeholder="Найти партнера"
              />
            </div>
          </div>
          <div className="products">
            <ul className="products__list">
              {Plants.map((plant) => {
                return (
                  <Product
                    id={plant.id}
                    title={plant.title}
                    price={plant.price}
                    image={plant.image}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="pagination">
        <ul className="pagination__list">
          <li className="pagination__item pagination__item--active">1</li>
          <li className="pagination__item">2</li>
          <li className="pagination__item">3</li>
          <li className="pagination__item">4</li>
          <li className="pagination__item">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 0.75C1.375 0.75 6.625 3.858 6.625 6C6.625 8.14125 1.375 11.25 1.375 11.25"
                stroke="#3D3D3D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ShopBlock;
