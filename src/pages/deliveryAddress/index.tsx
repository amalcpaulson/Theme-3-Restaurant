import { Footer } from "../../components/footer";
import Navbar from "../../components/navbar";
import { DeliverySchedule } from "./components/deliverySchedule";
import { DeliveryAddresscomp } from "./components/deliveryaddresscomp";
import { Payments } from "./components/payments";
import { PersonalDetails } from "./components/personalDetails";
import styles from "./index.module.css";
type Props = {};

export const DeliveryAddress = (_props: Props) => {
	return (
		<div className={styles.Wrapper}>
			<Navbar />
			<div className={styles.InnerWrapper}>
				<div>
					<DeliveryAddresscomp />
					<DeliverySchedule />
					<PersonalDetails />
					<Payments />
				</div>
				<div className={styles.Orders}>
					<div className={styles.Title}>
						{" "}
						<h1>Your Orders</h1>
						<div>
							<p>
								<span>4 X Hyderabad Chicken Biriyani</span>
								<p>₹160</p>
							</p>
							<p>
								<span>Subtotal</span>
								<p>₹2796</p>
							</p>
							<p>
								<span>Delivery fee</span>
								<p>Free</p>
							</p>
						</div>
					</div>
					<h1>
						<p>Total</p>
						<p>₹2796</p>
					</h1>
				</div>
			</div>
			<Footer />
		</div>
	);
};
