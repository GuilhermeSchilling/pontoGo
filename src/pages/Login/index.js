import styles from "./Login.module.css"
import people from "../../Images/Login/People.png"
import pontologo from "../../Images/Login/PontoGo Logo.png"
import eyepwd from "../../Images/Login/ant-design_eye-filled.png"
import { useState } from 'react'
import axios from "axios"
import Modal from "react-modal"
import xb from '../../Images/Dashboard/VectorX.png'
import { Link, useNavigate } from "react-router-dom"

function Login() {

    // declaracao dos hooks e constantes

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const [modalIsOpen, setIsOpen] = useState(false);

    //funcao de abertura de modal para começar fechado

    function openModal() {
        setIsOpen(true);
    }

    //recebimento do email e da password do banco de dados para a autenticacao

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:9009/login/',
                JSON.stringify({ email, password }),
                { headers: { 'Content-Type': 'application/json' } });
            openModal()
            setUser(response.data);
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status === 401) {
                setError('Usuário ou senha inválidos');
            }
        }
    }

    //funcao para autenticacao da conta

    window.onload = function () {
        const input = document.querySelector('#password')
        const button = document.querySelector('#tooglePass')
        button.addEventListener('click', tooglePass)
        function tooglePass() {
            if (input.type === 'password') {
                input.type = "text"
            } else {
                input.type = "password"
            }
        }
    }

    // return da função principal

    return (
        <div className={styles.boxall}>

            {/*verificacao se o usuario esta logado, caso 
            esteja vai abrir o modal caso o seja do role
            admin, caso seja usuario irá direto pros registros*/}

            {user == null ? (
                <div className={styles.container}>

                    {/* container do lado esquerdo com imagem e apresentacao */}

                    <div className={styles.presentation}>
                        <div className={styles.peoplebox}>
                            <img className={styles.people} alt="People" src={people} />
                        </div>
                        <h1 className={styles.strong}>Bem vindo ao PontoGo</h1>
                        <h2 className={styles.weak}>Aqui você fará toda gestão do <br />seu sistema de pontos.</h2>
                    </div>

                    {/* container com a logo e os inputs do login */}

                    <form className={styles.loginbox}>
                        <div className={styles.titlebox}>
                            <img className={styles.titlepng} alt='logo' src={pontologo} />
                        </div>
                        <div className={styles.login}>Faça login</div>
                        <div className={styles.subtitle}>Email</div>
                        {/* input do email */}
                        <input className={styles.inputemail}
                            placeholder='exemplo@email.com'
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className={styles.subtitle}>Senha</div>
                        <div className={styles.section}>
                            {/* input da senha */}
                            <input className={styles.inputpassword}
                                id="password"
                                type="password"
                                required
                                placeholder='***********'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button id="tooglePass" src={eyepwd} className={styles.eyepassword}>
                                <img alt="Show Password" src={eyepwd} />

                            </button>

                        </div>
                        <div className={styles.lostpassword}>Esqueci minha senha</div>

                        {/* botao de submit do formulario, onde ocorre a autenticacao do usuario com o banco de dados */}

                        <button className={styles.enterbutton} onClick={(e) => handleLogin(e)} type="submit">Entrar</button>

                        {/* caso ocorra algum erro na hora de autenticacao abaixo tera a mensagem de erro */}

                        <p>{error}</p>
                    </form >


                </div>
            ) : (
                // abertura do modal citado anteriormente (modal para o role admin)
                <Modal
                    isOpen={modalIsOpen}
                    contentLabel="Example Modal"
                    overlayClassName={styles.modaloverlay}
                    className={styles.modalcontent}
                >
                    <div className={styles.xcancelbox}>
                        <a href="http://localhost:3000/login" className={styles.xbutton}>
                            <img alt="xbutton" src={xb} />
                        </a>
                    </div>
                    <div className={styles.titlestext}>
                        <h1 className={styles.modaltitle}>Deseja fazer login com essa conta?</h1>
                        <h2 className={styles.email}>{email}</h2>
                    </div>
                    <div className={styles.buttons}>
                        {user.roleadmin ? (
                            <Link className={styles.confirmbutton} to="http://localhost:3000/dashboard/">Entrar</Link>
                        ) : <button onClick={navigate('/meus-registros', { state: user })} className={styles.confirmbutton}> Entrar</button>
                        }
                        <a className={styles.cancelbutton} href="http://localhost:3000/">Cancelar</a>
                    </div>
                </Modal>
            )}
        </div>
    )
}




export default Login

