import styles from "./index.module.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import logo from "../../../../assets/LogoWhite.png";
import { useDispatch } from "react-redux";
import { addTab } from "../../../../store/items/itemSlice";

export const Landing = () => {
	const dispatch = useDispatch();
	return (
		<div className={styles.Wrapper}>
			<div className={styles.landing}>
				<img src={img1} alt="" />
				<div className={styles.logos}>
					<img src={logo} alt="" />
				</div>
			</div>
			<div className={styles.Secondary}>
				<img src={img2} alt="" />
				<img src={img3} alt="" />
			</div>
			<button>
				<a href="#Photos" onClick={() => dispatch(addTab("Photos"))}>
					View more
				</a>
			</button>
		</div>
	);
};
