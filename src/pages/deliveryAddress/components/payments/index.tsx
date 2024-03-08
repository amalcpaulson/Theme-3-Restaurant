import styles from "./index.module.css";
import { COD, CardPayment, Gpay, Netbanking } from "./svg";

type Props = {};

export const Payments = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>Payment</h1>
      <div>
        <div>
          <div>
            {" "}
            <input id="cardPayment" type="checkbox" />
            <CardPayment />
          </div>
          <label htmlFor="cardPayment">Card Payment</label>
        </div>
        <div>
          <div>
            {" "}
            <input id="gpay" type="checkbox" />
            <Gpay />
          </div>
          <label htmlFor="gpay">Google Pay</label>
        </div>{" "}
        <div>
          <div>
            {" "}
            <input id="netbanking" type="checkbox" />
            <Netbanking />
          </div>
          <label htmlFor="netbanking">Netbanking</label>
        </div>{" "}
        <div>
          <div>
            {" "}
            <input id="cod" type="checkbox" />
            <COD />
          </div>
          <label htmlFor="cod">Cash on Delivery</label>
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
