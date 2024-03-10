import styles from "./index.module.css";
import { COD, CardPayment, Gpay, Netbanking } from "./svg";

type Props = {};

export const Payments = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>Payment</h1>
      <div>
        <div>
          <input id="cardPayment" type="checkbox" />
          <label htmlFor="cardPayment">
            <CardPayment /> <label htmlFor="cardPayment">Card Payment</label>
          </label>
        </div>
        <div>
          <input id="gpay" type="checkbox" />
          <label htmlFor="gpay">
            <Gpay /> <label htmlFor="gpay">Google Pay</label>
          </label>
        </div>
        <div>
          <input id="netbanking" type="checkbox" />
          <label htmlFor="netbanking">
            <Netbanking /> <label htmlFor="netbanking">Netbanking</label>
          </label>
        </div>
        <div>
          {" "}
          <input id="cod" type="checkbox" />
          <label htmlFor="cod">
            <COD /> <label htmlFor="cod">Cash on Delivery</label>
          </label>
        </div>
      </div>
      <p>
        By making this purchase you agree to our terms and conditions . I agree
        that placing the order places me under an obligation to make a payment
        in accordance with the General Terms and Conditions
      </p>
    </div>
  );
};
