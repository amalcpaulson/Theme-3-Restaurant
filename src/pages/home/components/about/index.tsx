import { useSelector } from "react-redux";
import { Hint, Scooter, Search, Star } from "../../../../assets/svg";
import styles from "./index.module.css";

export const About = () => {
	const landing = useSelector((state: any) => state.landing);
	return (
		<div className={styles.Wrapper}>
			<div className={styles.Header}>
				<div className={styles.Title}>
					<h1>{landing.title}</h1>
					<div>
						{" "}
						<p>{landing.rating}</p>
						<Star />
						<p>{landing.ratingCount}</p>
					</div>
				</div>
				<div>
					<Scooter />
					<p>15 - 20 min</p>
				</div>
			</div>
			<div className={styles.Content}>
				<p style={{ color: "#828282" }}>{landing.description}</p>
				<p style={{ color: "#5C4848" }}>{landing.address}</p>
				<p style={{ color: "#428A39" }}>
					{landing.timing} <Hint />
				</p>
			</div>
			<div className={styles.SearchBar}>
				<div>
					<Search colors={"#AA9D9D"} />
					<input
						type="text"
						placeholder="What would you like to eat ?"
					/>
				</div>
				<button>
					<Search colors={"#FFFFFF"} />
					<p>Find Food</p>
				</button>
			</div>
		</div>
	);
};
