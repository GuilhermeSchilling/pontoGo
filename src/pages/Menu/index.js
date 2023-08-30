import styles from "./Menu.module.css"
import logo from "../../Images/Menu/Group 3.png"
import principalimg from '../../Images/Menu/Group 72.png'
import AmoPet from "../../Images/Menu/Group 117.png"
import bus from "../../Images/Menu/Group.png"
import gostudy from "../../Images/Menu/Group 1.png"
import check from "../../Images/Menu/check.png"
import closex from "../../Images/Menu/closex.png"
import insta from "../../Images/Menu/insta.png"
import face from "../../Images/Menu/face.png"
import linkedin from "../../Images/Menu/in.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Menu/style.css';

function Menu() {

    return (
        //html do menu principal
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.size}>

                    {/* header */}

                    <header className={styles.header}>
                        <img alt="img6" className={styles.logo} src={logo} />
                        <div className={styles.boxright}>
                            <div className={styles.home}>Início</div>
                            <div className={styles.plan}>Planos</div>
                            <a href="http://localhost:3000/Login" className={styles.loginbutton}>Fazer login</a>
                        </div>
                    </header>

                    {/* banner principal com introducao e imagem */}

                    <nav className={styles.navcontainer}>
                        <div className={styles.textbox}>
                            <div className={styles.title}>Esquece o ponto manual</div>
                            <div className={styles.subtitles}>
                                <div className={styles.subtitle}>Chegou a nova realidade para<span className={styles.subtitlepurple}>Controle de Pontos</span></div>
                            </div>
                            <div className={styles.desc}>Com o PontoGo seus colaboradores poderão
                                bater seus pontos de forma fácil e rápida,
                                possuindo também uma Dashboard intuitiva.
                            </div>
                            <div className={styles.navbuttons}>
                                <button className={styles.buybutton}>Assinar agora</button>
                                <button className={styles.plansbutton}>Ver planos</button>
                            </div>
                        </div>
                        <div className={styles.principalimg}>
                            <img alt="img7" src={principalimg} className={styles.principalsize} />
                        </div>
                    </nav>

                    {/* 4 logos */}

                    <div className={styles.logosbox}>
                        <div className={styles.logos}>
                            <div className={styles.brainny}> <img className={styles.sizelogo} alt="img1" height="56px" width="200.57px" src="https://brainny.cc/static/images/brainny-logo.svg" /></div>
                            <div className={styles.amopet}><img className={styles.sizelogo} alt="img2" height="66.35px" width="213px" src={AmoPet} /></div>
                            <div className={styles.bus}><img className={styles.sizelogo} alt="img3" width="164.97px" height="68px" src={bus} /></div>
                            <div className={styles.gostudy}> <img className={styles.sizelogo} alt="img4" width="283.08px" height="74px" src={gostudy} /></div>
                        </div>
                        <div>
                            <div className={styles.titlelogo}>
                                Encontre o plano perfeito
                            </div>
                            <div className={styles.subtitlelogo}>
                                Escolha o plano que melhor se encaixa na sua empresa e
                                faça sua assinatura, dentro de 72h iremos liberar seus acessos.
                            </div>
                        </div>
                    </div>

                    {/* slider com planos */}

                    <>
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={3}
                            pagination={false}
                            navigation={true} modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="cardall">
                                    <div className={styles.cardtitle}>
                                        <div className={styles.cardplan}>Plano Bronze</div>
                                        <div className={styles.price}>R$ 30</div>
                                        <div className={styles.colab}>Uso de 5 colaboradores</div>
                                    </div>
                                    <div className={styles.earns}>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Area de meus registros</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Dashboard</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Acesso de 5 colaboradores</div>
                                        </div>
                                        <div className={styles.earnso}>
                                            <div className={styles.earnimg}>
                                                <img alt="x" className={styles.earnimg2} src={closex} />
                                            </div>
                                            <div>Suporte exclusivo</div>
                                        </div>
                                        <div className={styles.earnso}>
                                            <div className={styles.earnimg}>
                                                <img alt="x" className={styles.earnimg2} src={closex} />
                                            </div>
                                            <div>Email corporativo</div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonbox}>
                                        <button className="buttoncard">Assinar agora</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardall">
                                    <div className={styles.cardtitle}>
                                        <div className={styles.cardplan}>Plano Prata</div>
                                        <div className={styles.price}>R$ 50</div>
                                        <div className={styles.colab}>Uso de 10 colaboradores</div>
                                    </div>
                                    <div className={styles.earns}>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Area de meus registros</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Dashboard</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Acesso de 10 colaboradores</div>
                                        </div>
                                        <div className={styles.earnso}>
                                            <div className={styles.earnimg}>
                                                <img alt="x" className={styles.earnimg2} src={closex} />
                                            </div>
                                            <div>Suporte exclusivo</div>
                                        </div>
                                        <div className={styles.earnso}>
                                            <div className={styles.earnimg}>
                                                <img alt="x" className={styles.earnimg2} src={closex} />
                                            </div>
                                            <div>Email corporativo</div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonbox}>
                                        <button className="buttoncard">Assinar agora</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardall">
                                    <div className={styles.cardtitle}>
                                        <div className={styles.cardplan}>Plano Ouro</div>
                                        <div className={styles.price}>R$ 100</div>
                                        <div className={styles.colab}>Uso de 20 colaboradores</div>
                                    </div>
                                    <div className={styles.earns}>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Area de meus registros</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Dashboard</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Acesso de 20 colaboradores</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Suporte exclusivo</div>
                                        </div>
                                        <div className={styles.earnso}>
                                            <div className={styles.earnimg}>
                                                <img alt="x" className={styles.earnimg2} src={closex} />
                                            </div>
                                            <div>Email corporativo</div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonbox}>
                                        <button className="buttoncard">Assinar agora</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardall">
                                    <div className={styles.cardtitle}>
                                        <div className={styles.cardplan}>Plano Platina</div>
                                        <div className={styles.price}>R$ 200</div>
                                        <div className={styles.colab}>Acessos ilimitados</div>
                                    </div>
                                    <div className={styles.earns}>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Area de meus registros</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Dashboard</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Acessos ilimitados</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Suporte exclusivo</div>
                                        </div>
                                        <div className={styles.earnsw}>
                                            <div className={styles.earnimg}>
                                                <img alt="check" className={styles.earnimg2} src={check} />
                                            </div>
                                            <div>Email corporativo</div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonbox}>
                                        <button className="buttoncard">Assinar agora</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>

                    {/* cards com os planos separados para responsividade */}

                    <div className={styles.fourcardbox}>
                        <div className={styles.fourcard}>
                            <div className={styles.cardtitle}>
                                <div className={styles.cardplan}>Plano Platina</div>
                                <div className={styles.price}>R$ 200</div>
                                <div className={styles.colab}>Acessos ilimitados</div>
                            </div>
                            <div className={styles.earns}>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Area de meus registros</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Dashboard</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Acessos ilimitados</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Suporte exclusivo</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Email corporativo</div>
                                </div>
                            </div>
                            <div className={styles.buttonboxnew}>
                                <button className={styles.buttoncard}>Assinar agora</button>
                            </div>
                        </div>
                        <div className={styles.fourcard}>
                            <div className={styles.cardtitle}>
                                <div className={styles.cardplan}>Plano Platina</div>
                                <div className={styles.price}>R$ 200</div>
                                <div className={styles.colab}>Acessos ilimitados</div>
                            </div>
                            <div className={styles.earns}>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Area de meus registros</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Dashboard</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Acessos ilimitados</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Suporte exclusivo</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Email corporativo</div>
                                </div>
                            </div>
                            <div className={styles.buttonboxnew}>
                                <button className={styles.buttoncard}>Assinar agora</button>
                            </div>
                        </div>
                        <div className={styles.fourcard}>
                            <div className={styles.cardtitle}>
                                <div className={styles.cardplan}>Plano Platina</div>
                                <div className={styles.price}>R$ 200</div>
                                <div className={styles.colab}>Acessos ilimitados</div>
                            </div>
                            <div className={styles.earns}>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Area de meus registros</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Dashboard</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Acessos ilimitados</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Suporte exclusivo</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Email corporativo</div>
                                </div>
                            </div>
                            <div className={styles.buttonboxnew}>
                                <button className={styles.buttoncard}>Assinar agora</button>
                            </div>
                        </div>
                        <div className={styles.fourcard}>
                            <div className={styles.cardtitle}>
                                <div className={styles.cardplan}>Plano Platina</div>
                                <div className={styles.price}>R$ 200</div>
                                <div className={styles.colab}>Acessos ilimitados</div>
                            </div>
                            <div className={styles.earns}>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Area de meus registros</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Dashboard</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Acessos ilimitados</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Suporte exclusivo</div>
                                </div>
                                <div className={styles.earnsw}>
                                    <div className={styles.earnimg}>
                                        <img alt="check" className={styles.earnimg2} src={check} />
                                    </div>
                                    <div>Email corporativo</div>
                                </div>
                            </div>
                            <div className={styles.buttonboxnew}>
                                <button className={styles.buttoncard}>Assinar agora</button>
                            </div>
                        </div>
                    </div>

                    {/* rodape */}

                    <footer className={styles.footer}>

                        {/* redes sociais */}

                        <div className={styles.socialmedia}>
                            <div className={styles.link}>
                                <div className={styles.linkponto}>@pontogo</div>
                                <div className={styles.linkp}>Se conecta com a gente</div>
                            </div>
                            <div className={styles.socialimg}>
                                <img alt="instagram" src={insta} />
                            </div>
                            <div className={styles.socialimg}>
                                <img alt="facebook" src={face} />
                            </div>
                            <div className={styles.socialimg}>
                                <img alt="linkedin" className={styles.linkedin} src={linkedin} />
                            </div>
                        </div>
                        <div className={styles.subfooter}>
                            <div className={styles.line}></div>
                            <div className={styles.finalgo}>PontoGo - Todos direitos reservados</div>
                            <div className={styles.line}></div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Menu