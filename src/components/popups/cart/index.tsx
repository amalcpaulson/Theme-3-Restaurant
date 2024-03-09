import * as Popover from "@radix-ui/react-popover";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
	increaseItemQuantity,
	decreaseItemQuantity,
	removeFromCart,
} from "../../../store/cart/cartSlice";
import React from "react"; // Import React for JSX

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
		<div className={styles.wrapper}>
			<Popover.Root>
				<Popover.Trigger asChild>
					<button className={styles.iconTrigger} aria-label="Cart">
						<div>{cart.cart.length} Items</div>
					</button>
				</Popover.Trigger>
				<Popover.Anchor />
				<Popover.Portal>
					<Popover.Content className={styles.popoverContent}>
						<div className={styles.Topset}>
							<p className="colorText">
								{cart.cart.length} Items
							</p>
							<p>
								<Popover.Close>×</Popover.Close>{" "}
							</p>
						</div>
						<div className={styles.SelectedItems}>
							{cart.cart.map((item) => (
								<div
									className={styles.Individual}
									key={item.id}
								>
									<div>
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
										<img src={item.img} alt="" />
									</div>
									<div className={styles.DetailWrap}>
										<div className={styles.Detail}>
											<p>{item.name}</p>
											<span className="colorText">
												₹ {item.rate}.00
											</span>
											<p>
												{item.quantity} X ₹ {item.rate}
												.00
											</p>
										</div>
										<div className={styles.Amount}>
											<p className="colorText">
												₹ {item.quantity * item.rate}.00
											</p>
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
											</button>{" "}
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={styles.checkoutbutton}>
							<p>Checkout</p>
							<button>₹ {cart.totalAmount}.00</button>
						</div>
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	);
};

export default Cart;
