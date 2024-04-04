import { useParams } from "react-router-dom";
import Releted from "./Releted";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "../firebase";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import { AddLike, RemoveLike } from "../Redux/Slices/Plants";

const images = [image1, image2, image3, image4, image5, image6, image7];

type FullPlantsType = {
  id: string;
  title: string;
  price: string;
  image: number;
  Shortdescription: string;
  SKU: string;
  Tags: Array<string>;
  Categories: Array<string>;
};

function FullProduct() {
  const params = useParams();
  const [data, setData] = useState<FullPlantsType>({
    id: "",
    title: "",
    price: "",
    image: 1,
    Shortdescription: "",
    SKU: "",
    Tags: [""],
    Categories: [""],
  });

  const db = getFirestore(app);
  const { like } = useAppSelector((state) => state.plants);
  const [likeState, SetLikeState] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const ChangeLike = (like: boolean) => {
    if (like) {
      dispatch(AddLike(data.id));
      SetLikeState(true);
    } else {
      dispatch(RemoveLike(data.id));
      SetLikeState(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    async function FetchPlant(): Promise<void> {
      const docRef = doc(db, "Plants", `${params.id}`);
      const docSnap = (await getDoc(docRef)).data();
      const DataPlant = {
        title: docSnap?.title,
        price: docSnap?.price,
        image: docSnap?.image,
        Shortdescription: docSnap?.Shortdescription,
        SKU: docSnap?.SKU,
        Tags: docSnap?.Tags,
        Categories: docSnap?.Categories,
      };
      setData(DataPlant);
    }
    FetchPlant();
    if (like.includes(data.id) && !likeState) {
      SetLikeState(true);
    }
  }, [data.id, db, like, likeState, params.id]);

  return (
    <div className="shop">
      <section className="section container">
        <div className="PlantSettings">
          <div className="PlantImages">
            <div className="PlantImages__miniatures">
              {[1, 2, 3, 4].map(() => {
                return (
                  <div className="PlantImages__miniature">
                    <img
                      src={images[data.image - 1]}
                      alt=""
                      className="PlantImages__image"
                    />
                  </div>
                );
              })}
            </div>
            <div className="PlantImages__block-main-image">
              <img
                className="PlantImages__main-image"
                src={images[data.image - 1]}
                alt=""
              />
            </div>
          </div>

          <div className="PlantSettings__description">
            <h3 className="PlantSettings__main-title">{data.title}</h3>
            <div className="PlantSettings__description-header">
              <p className="PlantSettings__price">{data.price}</p>
              <div className="PlantSettings__assesment">
                <svg
                  className="PlantSettings__star"
                  width="15.000000"
                  height="15.000000"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="Iconly/Bold/Star"
                    width="15.000000"
                    height="15.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Star"
                    d="M11.19 8.95C11.03 9.1 10.96 9.33 10.99 9.55L11.55 12.63C11.6 12.89 11.49 13.15 11.27 13.3C11.06 13.46 10.77 13.48 10.54 13.35L7.77 11.91C7.67 11.86 7.57 11.83 7.46 11.83L7.29 11.83C7.23 11.83 7.17 11.85 7.12 11.88L4.35 13.33C4.21 13.4 4.06 13.43 3.91 13.4C3.54 13.33 3.29 12.98 3.35 12.61L3.91 9.53C3.94 9.31 3.87 9.08 3.71 8.92L1.45 6.73C1.26 6.55 1.2 6.27 1.28 6.03C1.37 5.78 1.58 5.6 1.84 5.56L4.94 5.11C5.18 5.08 5.39 4.94 5.49 4.73L6.86 1.92C6.9 1.86 6.94 1.8 6.99 1.75L7.04 1.71C7.07 1.68 7.11 1.65 7.14 1.63L7.21 1.6L7.32 1.56L7.58 1.56C7.82 1.58 8.02 1.72 8.13 1.93L9.52 4.73C9.62 4.93 9.81 5.07 10.04 5.11L13.14 5.56C13.41 5.6 13.63 5.78 13.71 6.03C13.79 6.28 13.72 6.55 13.53 6.73L11.19 8.95Z"
                    fill="#FFAC0C"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  className="PlantSettings__star"
                  width="15.000000"
                  height="15.000000"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="Iconly/Bold/Star"
                    width="15.000000"
                    height="15.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Star"
                    d="M11.19 8.95C11.03 9.1 10.96 9.33 10.99 9.55L11.55 12.63C11.6 12.89 11.49 13.15 11.27 13.3C11.06 13.46 10.77 13.48 10.54 13.35L7.77 11.91C7.67 11.86 7.57 11.83 7.46 11.83L7.29 11.83C7.23 11.83 7.17 11.85 7.12 11.88L4.35 13.33C4.21 13.4 4.06 13.43 3.91 13.4C3.54 13.33 3.29 12.98 3.35 12.61L3.91 9.53C3.94 9.31 3.87 9.08 3.71 8.92L1.45 6.73C1.26 6.55 1.2 6.27 1.28 6.03C1.37 5.78 1.58 5.6 1.84 5.56L4.94 5.11C5.18 5.08 5.39 4.94 5.49 4.73L6.86 1.92C6.9 1.86 6.94 1.8 6.99 1.75L7.04 1.71C7.07 1.68 7.11 1.65 7.14 1.63L7.21 1.6L7.32 1.56L7.58 1.56C7.82 1.58 8.02 1.72 8.13 1.93L9.52 4.73C9.62 4.93 9.81 5.07 10.04 5.11L13.14 5.56C13.41 5.6 13.63 5.78 13.71 6.03C13.79 6.28 13.72 6.55 13.53 6.73L11.19 8.95Z"
                    fill="#FFAC0C"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  className="PlantSettings__star"
                  width="15.000000"
                  height="15.000000"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="Iconly/Bold/Star"
                    width="15.000000"
                    height="15.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Star"
                    d="M11.19 8.95C11.03 9.1 10.96 9.33 10.99 9.55L11.55 12.63C11.6 12.89 11.49 13.15 11.27 13.3C11.06 13.46 10.77 13.48 10.54 13.35L7.77 11.91C7.67 11.86 7.57 11.83 7.46 11.83L7.29 11.83C7.23 11.83 7.17 11.85 7.12 11.88L4.35 13.33C4.21 13.4 4.06 13.43 3.91 13.4C3.54 13.33 3.29 12.98 3.35 12.61L3.91 9.53C3.94 9.31 3.87 9.08 3.71 8.92L1.45 6.73C1.26 6.55 1.2 6.27 1.28 6.03C1.37 5.78 1.58 5.6 1.84 5.56L4.94 5.11C5.18 5.08 5.39 4.94 5.49 4.73L6.86 1.92C6.9 1.86 6.94 1.8 6.99 1.75L7.04 1.71C7.07 1.68 7.11 1.65 7.14 1.63L7.21 1.6L7.32 1.56L7.58 1.56C7.82 1.58 8.02 1.72 8.13 1.93L9.52 4.73C9.62 4.93 9.81 5.07 10.04 5.11L13.14 5.56C13.41 5.6 13.63 5.78 13.71 6.03C13.79 6.28 13.72 6.55 13.53 6.73L11.19 8.95Z"
                    fill="#FFAC0C"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  className="PlantSettings__star"
                  width="15.000000"
                  height="15.000000"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="Iconly/Bold/Star"
                    width="15.000000"
                    height="15.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Star"
                    d="M11.19 8.95C11.03 9.1 10.96 9.33 10.99 9.55L11.55 12.63C11.6 12.89 11.49 13.15 11.27 13.3C11.06 13.46 10.77 13.48 10.54 13.35L7.77 11.91C7.67 11.86 7.57 11.83 7.46 11.83L7.29 11.83C7.23 11.83 7.17 11.85 7.12 11.88L4.35 13.33C4.21 13.4 4.06 13.43 3.91 13.4C3.54 13.33 3.29 12.98 3.35 12.61L3.91 9.53C3.94 9.31 3.87 9.08 3.71 8.92L1.45 6.73C1.26 6.55 1.2 6.27 1.28 6.03C1.37 5.78 1.58 5.6 1.84 5.56L4.94 5.11C5.18 5.08 5.39 4.94 5.49 4.73L6.86 1.92C6.9 1.86 6.94 1.8 6.99 1.75L7.04 1.71C7.07 1.68 7.11 1.65 7.14 1.63L7.21 1.6L7.32 1.56L7.58 1.56C7.82 1.58 8.02 1.72 8.13 1.93L9.52 4.73C9.62 4.93 9.81 5.07 10.04 5.11L13.14 5.56C13.41 5.6 13.63 5.78 13.71 6.03C13.79 6.28 13.72 6.55 13.53 6.73L11.19 8.95Z"
                    fill="#FFAC0C"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  width="15.000000"
                  height="15.000000"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="Iconly/Bold/Star"
                    width="15.000000"
                    height="15.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Star"
                    d="M11.19 8.95C11.03 9.1 10.96 9.33 10.99 9.55L11.55 12.63C11.6 12.89 11.49 13.15 11.27 13.3C11.06 13.46 10.77 13.48 10.54 13.35L7.77 11.91C7.67 11.86 7.57 11.83 7.46 11.83L7.29 11.83C7.23 11.83 7.17 11.85 7.12 11.88L4.35 13.33C4.21 13.4 4.06 13.43 3.91 13.4C3.54 13.33 3.29 12.98 3.35 12.61L3.91 9.53C3.94 9.31 3.87 9.08 3.71 8.92L1.45 6.73C1.26 6.55 1.2 6.27 1.28 6.03C1.37 5.78 1.58 5.6 1.84 5.56L4.94 5.11C5.18 5.08 5.39 4.94 5.49 4.73L6.86 1.92C6.9 1.86 6.94 1.8 6.99 1.75L7.04 1.71C7.07 1.68 7.11 1.65 7.14 1.63L7.21 1.6L7.32 1.56L7.58 1.56C7.82 1.58 8.02 1.72 8.13 1.93L9.52 4.73C9.62 4.93 9.81 5.07 10.04 5.11L13.14 5.56C13.41 5.6 13.63 5.78 13.71 6.03C13.79 6.28 13.72 6.55 13.53 6.73L11.19 8.95Z"
                    fill="#FFAC0C"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <p className="PlantSettings__review">19 Customer Review</p>
              </div>
            </div>
            <div className="PlantSettings_item">
              <h4 className="PlantSettings__title">Short Description:</h4>
              <p className="PlantSettings__text">{data.Shortdescription}</p>
            </div>

            <div className="PlantSettings__item">
              <h4 className="PlantSettings__title">Size</h4>
              <ul className="PlantSettings__sizes">
                <li className="PlantSettings__size">S</li>
                <li className="PlantSettings__size">M</li>
                <li className="PlantSettings__size">L</li>
                <li className="PlantSettings__size">XL</li>
              </ul>
              <div className="PlantSettings__buttons">
                <div className="PlantSettings__count-minus">-</div>
                <p className="PlantSettings__count">1</p>
                <div className="PlantSettings__count-plus">+</div>
                <button className="button PlantSettings__button">
                  BUY NOW
                </button>
                <button className="button__accent PlantSettings__button">
                  ADD TO CART
                </button>
                <div
                  className="PlantSettings__button PlantSettings__heart"
                  onClick={() => {
                    ChangeLike(!likeState);
                  }}
                >
                  {likeState ? (
                    <svg
                      color="red"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      id="IconChangeColor"
                      height="27"
                      width="27"
                    >
                      <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                        id="mainIconPathAttribute"
                        fill="#ff006a"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="20.000000"
                      height="17.000000"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M10 16.88C9.71 16.88 9.44 16.78 9.22 16.59C8.41 15.89 7.63 15.22 6.95 14.64L6.94 14.63C4.93 12.92 3.19 11.43 1.98 9.97C0.63 8.34 0 6.79 0 5.1C0 3.46 0.56 1.94 1.58 0.83C2.62 -0.29 4.04 -0.91 5.58 -0.91C6.74 -0.91 7.79 -0.55 8.72 0.17C9.19 0.54 9.62 0.98 10 1.5C10.37 0.98 10.8 0.54 11.27 0.17C12.2 -0.55 13.25 -0.91 14.41 -0.91C15.95 -0.91 17.37 -0.29 18.41 0.83C19.43 1.94 20 3.46 20 5.1C20 6.79 19.36 8.34 18.01 9.97C16.8 11.43 15.06 12.92 13.05 14.63C12.36 15.22 11.58 15.88 10.77 16.59C10.55 16.78 10.28 16.88 10 16.88ZM5.58 0.26C4.37 0.26 3.25 0.74 2.44 1.62C1.62 2.52 1.17 3.75 1.17 5.1C1.17 6.52 1.7 7.79 2.88 9.22C4.03 10.61 5.73 12.06 7.7 13.74L7.71 13.74C8.4 14.33 9.18 15 9.99 15.71C10.81 15 11.6 14.33 12.29 13.74C14.26 12.06 15.96 10.61 17.11 9.22C18.29 7.79 18.82 6.52 18.82 5.1C18.82 3.75 18.37 2.52 17.55 1.62C16.74 0.74 15.62 0.26 14.41 0.26C13.52 0.26 12.7 0.54 11.98 1.1C11.34 1.6 10.89 2.23 10.63 2.66C10.5 2.89 10.26 3.03 10 3.03C9.73 3.03 9.49 2.89 9.36 2.66C9.1 2.23 8.65 1.6 8.01 1.1C7.29 0.54 6.47 0.26 5.58 0.26Z"
                        fill="#46A358"
                        fill-opacity="1.000000"
                        fill-rule="nonzero"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="PlantSettings__item">
              <p className="PlantSettings__tag-title">
                SKU:<span className="PlantSettings__tag">{data.SKU}</span>
              </p>
              <p className="PlantSettings__tag-title">
                Categories:
                {data.Categories.map((categori) => (
                  <span className="PlantSettings__tag">{categori + " "}</span>
                ))}
              </p>
              <p className="PlantSettings__tag-title">
                Tags:
                {data.Tags.map((tag) => (
                  <span className="PlantSettings__tag">{tag + " "}</span>
                ))}
              </p>
              <div className="PlantSettings__share">
                Share this products:
                <svg
                  width="8.000000"
                  height="15.000000"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Facebook"
                    d="M1.87 5L0 5L0 7.5L1.87 7.5L1.87 15L5 15L5 7.5L7.25 7.5L7.5 5L5 5L5 3.93C5 3.37 5.12 3.12 5.68 3.12L7.5 3.12L7.5 0L5.12 0C2.87 0 1.87 1 1.87 2.87L1.87 5Z"
                    fill="#3D3D3D"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  width="15.000000"
                  height="13.000000"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Twitter"
                    d="M4.71 12.19C10.37 12.19 13.47 7.5 13.47 3.43C13.47 3.3 13.47 3.16 13.46 3.03C14.06 2.6 14.58 2.06 15 1.44C14.44 1.68 13.85 1.85 13.23 1.92C13.86 1.54 14.35 0.94 14.58 0.22C13.99 0.57 13.33 0.83 12.63 0.97C12.07 0.37 11.27 0 10.38 0C8.68 0 7.3 1.37 7.3 3.07C7.3 3.31 7.33 3.55 7.38 3.77C4.82 3.65 2.56 2.42 1.04 0.56C0.77 1.01 0.62 1.54 0.62 2.11C0.62 3.17 1.17 4.12 1.99 4.67C1.49 4.65 1.01 4.51 0.6 4.28C0.6 4.29 0.6 4.31 0.6 4.32C0.6 5.81 1.66 7.06 3.07 7.34C2.81 7.41 2.54 7.45 2.25 7.45C2.06 7.45 1.86 7.43 1.68 7.39C2.07 8.61 3.2 9.5 4.55 9.53C3.5 10.35 2.17 10.85 0.73 10.85C0.48 10.85 0.24 10.83 0 10.8C1.36 11.68 2.97 12.19 4.71 12.19Z"
                    fill="#3D3D3D"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  width="15.000000"
                  height="15.000000"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Linkedin"
                    d="M3.12 1.56C3.12 2.43 2.43 3.12 1.56 3.12C0.68 3.12 0 2.43 0 1.56C0 0.68 0.68 0 1.56 0C2.43 0 3.12 0.68 3.12 1.56ZM3.12 4.37L0 4.37L0 14.37L3.12 14.37L3.12 4.37ZM8.12 4.37L5 4.37L5 14.37L8.12 14.37L8.12 9.12C8.12 6.18 11.87 5.93 11.87 9.12L11.87 14.37L15 14.37L15 8.06C15 3.12 9.43 3.31 8.12 5.75L8.12 4.37Z"
                    fill="#3D3D3D"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
                <svg
                  width="18.000000"
                  height="18.000000"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip11_1248">
                      <rect
                        id="Message"
                        width="18.000000"
                        height="18.000000"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clip11_1248)">
                    <path
                      id="Vector 13 (Stroke)"
                      d="M9 4.09C7.3 4.09 4.98 4.23 3.51 4.34C3.03 4.37 2.65 4.76 2.65 5.23L2.65 5.76L8.53 8.85C8.82 9.01 9.17 9.01 9.46 8.85L15.34 5.76L15.34 5.23C15.34 4.76 14.96 4.37 14.48 4.34C13.01 4.23 10.69 4.09 9 4.09ZM15.34 7.01L10.02 9.81C9.38 10.14 8.61 10.14 7.97 9.81L2.65 7.01L2.65 12.76C2.65 13.23 3.03 13.62 3.51 13.65C4.98 13.76 7.3 13.9 9 13.9C10.69 13.9 13.01 13.76 14.48 13.65C14.96 13.62 15.34 13.23 15.34 12.76L15.34 7.01ZM3.43 3.25C4.9 3.14 7.25 3 9 3C10.74 3 13.09 3.14 14.56 3.25C15.66 3.33 16.5 4.2 16.5 5.23L16.5 12.76C16.5 13.79 15.66 14.66 14.56 14.74C13.09 14.85 10.74 15 9 15C7.25 15 4.9 14.85 3.43 14.74C2.33 14.66 1.5 13.79 1.5 12.76L1.5 5.23C1.5 4.2 2.33 3.33 3.43 3.25Z"
                      fill="#3D3D3D"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="Description">
          <div className="Description__header">
            <p className="Description__header-title Description__header-title--active">
              Product Description
            </p>
            <p className="Description__header-title">Reviews (19)</p>
          </div>
          <div className="Description__block-text">
            <p className="Description__text">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla.
            </p>
            <p className="Description__text">
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.
            </p>

            <h4 className="Description__title">Living Room:</h4>
            <p className="Description__text">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <h4 className="Description__title">Dining Room:</h4>
            <p className="Description__text">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>

            <h4 className="Description__title">Office:</h4>
            <p className="Description__text">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      <Releted />
    </div>
  );
}
export default FullProduct;
