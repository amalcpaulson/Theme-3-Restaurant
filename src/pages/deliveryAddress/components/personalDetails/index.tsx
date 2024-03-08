import styles from './index.module.css'

type Props = {}

export const PersonalDetails = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>Personal Details</h1>
      <input type="email" placeholder="Email" />
      <div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Mobile Number" />
      <button>Save</button>
    </div>
  );
}