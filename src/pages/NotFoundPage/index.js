import styles from "./NotFound.module.css"
import logo from "../../Images/Menu/Group 3.png"

function NotFoundPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img alt="Logotype" src={logo} className={styles.logo} />
            </div>
            <div className={styles.navcontainer}>
                <div className={styles.title}>Página não encontrada!</div>
                <div className={styles.desc}>
                    Clique no botão para ir para a página inicial
                </div>
                <div>
                    <form action="http://localhost:3000/Login">
                        <input  className={styles.homebutton} type="submit" value="Início" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage