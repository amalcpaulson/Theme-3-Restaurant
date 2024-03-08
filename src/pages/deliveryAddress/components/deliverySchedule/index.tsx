import styles from './index.module.css'

type Props = {}

export const DeliverySchedule = (_props: Props) => {
  const data = [
    {
      day: "Today",
      time: "9:00PM to 10:00PM",
    },
    {
      day: "Today",
      time: "10:00PM to 11:00PM",
    },
    {
      day: "Today",
      time: "11:00PM to 12:00PM",
    },
    {
      day: "Today",
      time: "12:00PM to 01:00PM",
    },
    {
      day: "Today",
      time: "01:00PM to 02:00PM",
    },
    {
      day: "Today",
      time: "03:00PM to 04:00PM",
    },
    {
      day: "Today",
      time: "05:00PM to 06:00PM",
    },
    {
      day: "Today",
      time: "06:00PM to 07:00PM",
    },
    {
      day: "Today",
      time: "07:00PM to 08:00PM",
    },
  ];
  return (
    <div className={styles.Wrapper}>
      <h1>Delivery Schedule</h1>
      <p>Please select a delivery time</p>
      <div>
        {data.map(({ day, time }) => (
          <div key={time}>
            <h3>{day}</h3>
            <p>{time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}