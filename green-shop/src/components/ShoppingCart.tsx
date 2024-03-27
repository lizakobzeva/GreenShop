function ShoppingCart() {
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
          <ul className="ShoppingCart__Products-list">
            <li className="ShoppingCart__Products-item">
              <img src="" alt="" />
              <div className="ShoppingCart__Products-inform">
                <p>Barberton Daisy</p>
                <span>SKU: 1995751877966</span>
              </div>
              <p className="ShoppingCart__price">$119.00</p>
              <div className="ShoppingCart__quantity">
                <div className="ShoppingCart__sign">-</div>
                <p>2</p>
                <div className="ShoppingCart__sign">+</div>
              </div>
              <p className="ShoppingCart__Total">$238.00</p>
              <svg
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
          </ul>
        </div>
      </div>
    </section>
  );
}
export default ShoppingCart;
