import styles from "./ContainerUser.module.css"
import clockicon from '../../Images/Dashboard/clarity_clock-solid.png'
import xb from '../../Images/Dashboard/VectorX.png'
import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Pagination from "../Container/Pagination";
import Card from "../Card";
Modal.setAppElement("#root");

function ContainerUser() {

  //declaracao de hooks e constantes

  const [currentPage, setCurrentPage] = useState(1); //pagina inicial = 1
  const [postsPerPage, setPostsPerPage] = useState(8); //quantidade de cards por pagina
  const location = useLocation();
  const user = location.state
  const pointsAPI = axios.create({ baseURL: "http://localhost:9009/" })
  const [points, setPoints] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const copyArray = [...points];
  const reversedArray = copyArray.reverse();


  //funcao de abertura e fechamento do modal

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  //metodo get para recebimento dos registros de pontos do banco de dados

  async function fetchPoints() {
    try {
      const response = await pointsAPI.get('/admindashboard');
      setPoints(response.data)
    } catch (error) {
      console.log(error)
      console.log(setPostsPerPage)
    }
  }

  //metodo post para insercao de novos pontos no banco de dados
  //contendo todas informacoes necessarias, desde nome até data do ponto

  async function insertPoints() {
    const currentDate = new Date()
    const hourtime = String(currentDate.getHours()).padStart(2, '0')
    const minute = String(currentDate.getMinutes()).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const mounth = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = String(currentDate.getFullYear()).padStart(2, '0')
    const data = {
      hourtime,
      minute,
      day,
      mounth,
      year,
      name: user.name,
      id: user.id
    }

    try {
      const response = await pointsAPI.post('/admindashboard', data)
      setPoints(prev => {
        return [...prev, response]
      })
    } catch (error) {
      console.log(error);
    }
  }

  //funcao para abrir modal de confirmacao de insercao de ponto

  const handleClick = async () => {
    await insertPoints();
    setTimeout(function () {
      closeModal()
    }, 50)
  }
  useEffect(() => {
    fetchPoints()
  })

  //constantes para atualizacao do relogio do modal com data atual

  const currentDate = new Date()
  const hourtime = String(currentDate.getHours()).padStart(2, '0')
  const minute = String(currentDate.getMinutes()).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')
  const mounth = String(currentDate.getMonth() + 1).padStart(2, '0')
  const year = String(currentDate.getFullYear()).padStart(2, '0')

  const lastPostIndex = currentPage * postsPerPage; //index do ultimo card da pagina
  const firstPostIndex = lastPostIndex - postsPerPage; //index do primeiro card da pagina
  const currentPosts = reversedArray.slice(firstPostIndex, lastPostIndex);  //quais cards irao aparecer na pagina

  const PointListId = ({ reversedArray }) => {
    return (
        <div>

            {/* map com o array invertido para receber as informacoes na ordem de mais recenete para mais antigo */}
            {reversedArray.map(point => (
          <div>  {
            point.id === user.id ? (
              <Card
                personname={point.name}
                personid={point.id}
                hour={`${point.hourtime}:${point.minute}`}
                date={`${point.day}/${point.mounth}/${point.year}`}>
              </Card>
            ) : (<div></div>)
          }</div>
        ))}
            
        </div>
    );
};


  return (

    //retorno da funcao principal

    <div className={styles.container}>
      <div className={styles.content}>

        {/* abertura do modal para confirmacao de insercao de ponto */}

        <button onClick={openModal} id="horaBtn" className={styles.registerbutton}>Registrar Ponto</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName={styles.modaloverlay}
          className={styles.modalcontent}
        >
          <div className={styles.xcancelbox}>
            <button onClick={closeModal} name="xbutton" id="xbutton" className={styles.xtocancel}>
              <img alt="xbutton" src={xb} />
            </button>
          </div>
          <h1 className={styles.registertitle}>Registrar novo ponto</h1>
          <img className={styles.clock} alt="Clock" src={clockicon} />
          <h2 className={styles.registerhour}>{`${hourtime}:${minute}`}</h2>
          <h3 className={styles.registerdate}>{`${day}/${mounth}/${year}`}</h3>
          <button onClick={handleClick} name="confirmbutton" id="registraHorario" className={styles.confirmbutton}>
            Bater ponto
          </button>
          <button onClick={closeModal} name="cancelbutton" id="theme" className={styles.cancelbutton}>
            Cancelar
          </button>
        </Modal>

        {/* header do container */}

        <div className={styles.titles}>
          <div className={styles.title}>Colaborador</div>
          <div className={styles.title}>Data</div>
          <div className={styles.title}>Hora</div>
        </div>

        {/* .map para exibicao de todos os pontos do usuario 
        que fez login anteriormente, filtro feito pelo id do user */}



        <div className='app'>
          <PointListId reversedArray={currentPosts} />
          <Pagination
            totalPosts={reversedArray.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>




        {/* {reversedArray.map(point => (
          <div>  {
            point.id === user.id ? (
              <Card
                personname={point.name}
                personid={point.id}
                hour={`${point.hourtime}:${point.minute}`}
                date={`${point.day}/${point.mounth}/${point.year}`}>
              </Card>
            ) : (<div></div>)
          }</div>
        ))} */}


      </div>
    </div>
  )
}
export default ContainerUser