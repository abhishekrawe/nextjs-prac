import Links from "./Links";
import styles from  "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>Logo </div>
            <div>
                <Links/>
            </div>
        </div>
    )
}
export default Navbar;