import "./App.css";
import { useCartStore } from "./zus/Cart.store";
import { useProductsStore } from "./zus/Products.store";

function App() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();
  const { products } = useProductsStore();

  const price = cart.reduce((acc, item) => acc + item.price, 0);
  // Show a cart with a list of items with a remove button and a clear button to clear the cart
  // Also show a list of products that can be added to the cart
  return (
    <div className="main">
      <div className="cart">
        <h2>Cart</h2>
        <button onClick={clearCart}>Clear Cart</button>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="total">
        <h2>Total</h2>
        <p>{price}$</p>
      </div>
      <div className="products">
        <h2>Products</h2>
        <ul>
          {products.map(({ id, name, price }) => {
            return (
              <div className="product" key={id}>
                <h3>{name}</h3>
                <p>{price}$</p>
                <button
                  onClick={() => addToCart({ id, name, price, quantity: 1 })}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
