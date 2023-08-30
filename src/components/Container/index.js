import styles from "./Container.module.css"
import { getAllUsersPoints } from "../../services/points"
import { useEffect, useState } from "react"
import Pagination from "./Pagination"
import PointList from "./PointList"

const Container = () => {

    // declaracao dos hooks e constantes

    const [currentPage, setCurrentPage] = useState(1); //pagina inicial = 1
    const [postsPerPage, setPostsPerPage] = useState(8); //quantidade de cards por pagina
    const [points, setPoints] = useState([])
    const copyArray = [...points];
    const reversedArray = copyArray.reverse();

    //metodo de get utilizado para recebimento dos registros de todos usuarios do banco de dados

    useEffect(() => {
        fetchPoints()
        console.log(setPostsPerPage)
    }, [])

    async function fetchPoints() {
        const pointsdDaAPI = await getAllUsersPoints()
        setPoints(pointsdDaAPI)
    }




    const lastPostIndex = currentPage * postsPerPage; //index do ultimo card da pagina
    const firstPostIndex = lastPostIndex - postsPerPage; //index do primeiro card da pagina
    const currentPosts = reversedArray.slice(firstPostIndex, lastPostIndex);  //quais cards irao aparecer na pagina



    return (

        //retorno da funcao principal

        <div className={styles.container}>
            <div className={styles.titles}>

                {/* header */}
                
                <div className={styles.title}>Colaborador</div>
                <div className={styles.title}>Data</div>
                <div className={styles.title}>Hora</div>
            </div>

            {/* paginacao com todos os cards de pontos dos usuarios */}

            <div className='app'>
                <PointList reversedArray={currentPosts} />
                <Pagination
                    totalPosts={reversedArray.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}

export default Container