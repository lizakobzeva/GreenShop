import { useAppSelector } from "../Redux/hook";
import CartItem from "./CartItem";
// import { useEffect } from "react";

function ShoppingCart() {
  const { cart } = useAppSelector((state) => state.plants);

  const CartArray = () => {
    //const keys = Object.keys(cart);
    const array = Object.entries(cart);
    return array.map((obj) => {
      return <CartItem itemId={obj[0]} quantity={obj[1]} />;
    });
  };

  return (
    <section className="section container">
      <div className="ShoppingCart">
        <div className="ShoppingCart__Products">
          <ul className="ShoppingCart__Products-header">
            <li className="ShoppingCart__Produts-header-item">Products</li>
            <li className="ShoppingCart__Produts-header-item">Price</li>
            <li className="ShoppingCart__Produts-header-item">Quantity</li>
            <li className="ShoppingCart__Produts-header-item">Total</li>
          </ul>
          <ul className="ShoppingCart__Products-list">{CartArray()}</ul>
        </div>

        <div className="ShoppingCart__CartTotals">
          <p className="ShoppingCart__CartTotals-title">Cart Totals</p>
          <p className="ShoppingCart__CartTotals-text">Coupon Apply</p>
          <div className="ShoppingCart__block-input">
            <input
              className="ShoppingCart__input"
              placeholder="Enter coupon code here..."
              type="text"
            />
            <button type="submit" className="button ShoppingCart__button">
              Apply
            </button>
          </div>
          <div className="ShoppingCart__block-inform">
            <p className="ShoppingCart__text">Subtotal</p>
            <p className="ShoppingCart__title">$2,683.00</p>
          </div>
          <div className="ShoppingCart__block-inform">
            <p className="ShoppingCart__text">Coupon Discount</p>
            <p className="ShoppingCart__title">(-) 00.00</p>
          </div>
          <div className="ShoppingCart__block-inform">
            <p className="ShoppingCart__text">Shiping</p>
            <p className="ShoppingCart__title">$16.00</p>
          </div>
          <div className="ShoppingCart__view">View shipping charge</div>
          <div className="ShoppingCart__block-inform">
            <p className="ShoppingCart__total-title">Total</p>
            <p className="ShoppingCart__total-price">$2,699.00</p>
          </div>
          <button className="button ShoppingCart__main-button">
            Proceed To Checkout
          </button>
          <a href="" className="ShoppingCart__Continue">
            Continue Shopping
          </a>
        </div>
      </div>
    </section>
  );
}
export default ShoppingCart;
