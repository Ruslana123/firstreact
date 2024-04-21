import burger_logo from "../../assets/burger-logo.png";
import styles from "./header.module.css";

export default function Header ({count, showCardPage}) {
    return (
        <div className={styles.header}>
            <img width="50" height="50" src={burger_logo} alt="burger"/>
            <span onClick={() => showCardPage(false)}>MyLogo</span>
            <div onClick={() => showCardPage(true)} className={styles.card}>Card {count}</div>
        </div>
    )
}