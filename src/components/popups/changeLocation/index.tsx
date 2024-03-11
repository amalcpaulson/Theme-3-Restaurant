import styles from "./index.module.css";

interface ChangeLocationProps {
  onClose: () => void;
}

const ChangeLocation = ({ onClose }: ChangeLocationProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.popoverContent}>
        <div className={styles.Header}>
          {" "}
          <h2>Change Location</h2>{" "}
          <button onClick={onClose} className={styles.CloseBtn}>
            X
          </button>
        </div>
        <div>
          <input type="text" placeholder="Search Location" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3796772112237!2d76.33437737573249!3d10.311468467596454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08026c4ef1c919%3A0x576cd8a7cb411d6d!2sParadise%20family%20Restaurant%20%26bake%20shop!5e0!3m2!1sen!2sin!4v1708104518741!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <button className={styles.UpdateBtn}>Update</button>
      </div>{" "}
    </div>
  );
};

export default ChangeLocation;
