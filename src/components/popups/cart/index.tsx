import * as Popover from "@radix-ui/react-popover";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
} from "../../../store/cart/cartSlice";
import React from "react";
import { CartSvg } from "../../../assets/svg";

// Assuming you have a CartItem interface defined in your Redux slice or another TypeScript file
interface CartItem {
  id: string; // or number, depending on your item ID type
  name: string;
  quantity: number;
  rate: number;
  img: string; // Assuming this is a URL to the image, adjust type if necessary
}

// Define the expected structure of your Redux state
interface RootState {
  cart: {
    cart: CartItem[];
    totalAmount: number;
  };
}

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={styles.iconTrigger} aria-label="Cart">
          <CartSvg />
          {cart.cart.length} Items
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content className={styles.popoverContent}>
          <div className={styles.Topset}>
            <div>
              <h2>Delivery</h2>
              <p>Standard ( 40 min)</p>
            </div>
            <Popover.Close>×</Popover.Close>
          </div>
          <div className={styles.SelectedItems}>
            {cart.cart.map((item) => (
              <div className={styles.Individual} key={item.id}>
                {" "}
                <img src={item.img} className={styles.Image} alt="" />
                <div>
                  <div>
                    {" "}
                    <p>{item.name}</p>{" "}
                    <button
                      onClick={() =>
                        dispatch(
                          removeFromCart({
                            id: item.id,
                          })
                        )
                      }
                    >
                      ×
                    </button>
                  </div>
                  <div>
                    {" "}
                    <span className="colorText">₹ {item.rate}.00</span>
                    <div className={styles.Counter}>
                      <button
                        onClick={() =>
                          dispatch(
                            increaseItemQuantity({
                              id: item.id,
                            })
                          )
                        }
                      >
                        +
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          dispatch(
                            decreaseItemQuantity({
                              id: item.id,
                            })
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p>Any Suggestions ? We will pass it on</p>
          </div>
          <div>
            <h2>Billing Details</h2>
            <div>
              <p>Item Total</p>
              <p>₹160</p>
            </div>
            <div>
              <p>Delivery Fee | 57.2kms</p>
              <p>₹20</p>
            </div>
          </div>
          <div>
            <p>Delivery Tip</p>
            <div>
              <p>Gst and Restaurant Charges</p>
              <p>₹15.89</p>
            </div>
          </div>
          <div>
            <h3>To Pay</h3>
            <p>₹ {cart.totalAmount}.00</p>
          </div>

          <button>Go to checkout</button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Cart;
