import { useEffect, useState } from "react";
// import { useAppSelector } from "../Redux/hook";
import image1 from "../assets/image1.png";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "../firebase";

interface CartItemProps {
  itemId: string;
  quantity: number;
}

type PlantType = {
  title: string;
  price: number;
  image: number;
  SKU: string;
};

const CartItem = ({ itemId, quantity }: CartItemProps) => {
  //   const { cart } = useAppSelector((state) => state.plants);

  const [data, setData] = useState<PlantType>({
    title: "",
    price: 0,
    image: 1,
    SKU: "",
  });

  //   const [quantityState, setQuantityState] = useState(quantity);
  const db = getFirestore(app);

  useEffect(() => {
    async function FetchPlant(): Promise<void> {
      const docRef = doc(db, "Plants", `${itemId}`);
      const docSnap = (await getDoc(docRef)).data();
      const DataPlant = {
        title: docSnap?.title,
        price: docSnap?.price,
        image: docSnap?.image,
        SKU: docSnap?.SKU,
      };
      setData(DataPlant);
    }
    FetchPlant();
  });
  return (
    <li className="ShoppingCart__Products-item">
      <img src={image1} alt="" className="ShoppingCart__Products-image" />
      <div className="ShoppingCart__Products-inform">
        <p className="ShoppingCart__Products-inform-title">{data.title}</p>
        <span>SKU: {data.SKU}</span>
      </div>
      <p className="ShoppingCart__price">${data.price}.00</p>
      <div className="ShoppingCart__quantity">
        <div className="ShoppingCart__sign">-</div>
        <p className="ShoppingCart__quantity-count">{quantity}</p>
        <div className="ShoppingCart__sign">+</div>
      </div>
      <p className="ShoppingCart__Total">${data.price * quantity}.00</p>
      <svg
        className="ShoppingCart__Trash"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Iconly/Curved/Delete">
          <g id="Delete">
            <path
              id="Stroke 1"
              d="M18.8892 9.55408C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55408"
              stroke="#727272"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              d="M20.3651 6.47979H4.2146"
              stroke="#727272"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 5"
              d="M15.7148 6.47979C15.7148 6.47979 16.2434 2.71408 12.2891 2.71408C8.33578 2.71408 8.86435 6.47979 8.86435 6.47979"
              stroke="#727272"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </li>
  );
};

export default CartItem;
