import { Footer } from "../../components/footer";
import withEditor from "../../components/hoc";
import Navbar from "../../components/navbar";
import { About } from "./components/about";
import { Landing } from "./components/landing";
import styles from "./index.module.css";

const Home = () => {
	return (
		<div className={styles.Wrapper}>
			<Navbar/>
			<Landing />
			<About />
			<Footer />
		</div>
	);
};

export default withEditor(Home);
