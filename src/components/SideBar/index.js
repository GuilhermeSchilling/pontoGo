import styles from "./SideBar.module.css"
import logo from "../../Images/Login/PontoGo Logo.png"
import dashlogo from "../../Images/Dashboard/Dashboard Logo.png"
import exiticon from "../../Images/Dashboard/ant-design_logout-outlined.png"
import { Link } from "react-router-dom"

function SideBar() {

    return (

        // sidebar do painel dos usuarios

        <div className={styles.container}>
            <div className={styles.topbox}>
                <img className={styles.logotype} alt="Logo" src={logo} />
            </div>
            <div className={styles.dashbox}>
                <div className={styles.dashboardlogo}>
                    <img alt="Dashboard" src={dashlogo} />
                </div>
            </div>
            <Link to="/">
                <div className={styles.exitbox}>
                    <div className={styles.exiticon}><img alt="Exit Icon" src={exiticon} /></div>
                    <div className={styles.exit}>Sair</div>
                </div>
            </Link>
        </div>

    )
}

export default SideBar