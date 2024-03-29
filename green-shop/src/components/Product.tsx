import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

interface ProductProps {
  title: string;
  price: string;
  image: number;
  id: string;
}

const images = [image1, image2, image3, image4, image5, image6, image7];

const Product = ({ title, image, id }: ProductProps) => {
  return (
    <li className="product">
      <div className="product__image">
        <img src={images[image - 1]} alt="" />
        <div className="product__toolbar">
          <Link className="product__tool" to={`/shop/${id}`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4_214)">
                <path
                  d="M14.5656 16.0023C10.5704 19.1859 4.98549 18.3049 2.02729 14.6537C-0.827886 11.1285 -0.64932 6.04315 2.44811 2.82459C5.64856 -0.500733 10.6802 -0.94465 14.3277 1.78316C15.6345 2.76028 16.6104 4.00338 17.246 5.50808C17.8853 7.02152 18.0795 8.59614 17.8578 10.2201C17.6368 11.8366 16.9918 13.2769 15.9423 14.6212C16.0272 14.6768 16.1178 14.7167 16.1827 14.7816C17.3365 15.9305 18.4859 17.0836 19.6397 18.2325C19.9132 18.5047 20.0493 18.8219 19.9682 19.204C19.8071 19.9644 18.9018 20.2579 18.3211 19.7359C18.0489 19.4918 17.7985 19.2227 17.54 18.9642C16.5923 18.0171 15.6451 17.0693 14.6973 16.1221C14.658 16.0847 14.6168 16.0497 14.5656 16.0023ZM15.9529 8.98637C15.9629 5.12659 12.8468 2.00606 8.97825 2.00044C5.12035 1.99482 2.00669 5.09038 1.98983 8.94766C1.97297 12.8168 5.08289 15.9461 8.96326 15.9642C12.8055 15.9823 15.9429 12.8499 15.9529 8.98637Z"
                  fill="#3D3D3D"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_214">
                  <rect width="19.9913" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

      <div className="product__description">
        <span className="product__title">{title}</span>
      </div>
    </li>
  );
};
export default Product;
