import { Footer } from "../../components/footer"
import { Navbar } from "../../components/navbar"
import { About } from "./components/about"
import { Landing } from "./components/landing"
import { OnlineOders } from "./components/onlineOder"
import styles from './index.module.css'

type Props = {}

export const Home = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
        <Navbar />
        <Landing />
        <About />
        <OnlineOders />
        <Footer />
    </div>
  )
}