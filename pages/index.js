// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import './css/Home.module.css';
// import masthead from "/lu.jpeg";
// import mastheadCelu from "./assets/img/luCelu.jpg";
// import mastheadCelu2 from "/luCelu2.jpg";

// if (window.matchMedia("(min-width: 450px)").matches) {
//     masthead = mastheadCelu ;
// } else {
//   masthead = mastheadCelu ;
// }

// import logo from "./luLogo.png";



export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
          {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">Lucila Arrúa</a> */}
          {/* <div className="row justify-content-left">
            <img src={logo} alt="Lucila psicologa" className="logoSuperior"></img>
          </div> */}
          {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
          {/* <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
            </ul>
          </div> */}
        </div>
      </nav>
      {/* <!-- Masthead--> */}

      <header className="masthead"
        // Style={`background:url(${window.matchMedia("(min-width: 450px)").matches ? "lu.jpeg" : "luCelu2.jpg"})`}>
        Style={`background:url("lu.jpeg")`}>
        <div className="container h-100">
          <div className="row h-100 d-flex align-items-center justify-content-left text-left">
            <div className="col-lg-10">
              <div className="row justify-content-left">
                {/* <img src={logo} alt="Lucila psicologa" className="logoPequenio logoGrande"></img> */}
                <Image
                  src="/luLogo.png"
                  alt="Logo Lucila Arrua sitio Web"
                  className="logoPequenio logoGrande"
                  width={100}
                  height={100}
                ></Image>
              </div>
              {/* <div className="row justify-content-center">
                <a href="https://calendly.com/lucilaarrua/sesion-de-claridad" className="btn btn-Lu">Postulá a una sesión de claridad</a>
              </div> */}
            </div>

          </div>

        </div>
      </header>
      <section className="bg-LuGreen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className=" text-uppercase display-6 text-white p-0 m-0">Acompañamiento online para vidas en movimiento</h1>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About--> */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 text-black mt-2">¿A quién está dirigido este espacio?</h1>
              <hr className="divider solid my-3 luDivisorGreen" />
              <p className="text-black-10 mb-4 text-justify">A personas que hayan elegido como modo de vida “el viaje”, el “movimiento”, y que se encuentren en cualquiera de sus etapas (antes, durante, después).
              Todos los momentos de un “viaje” implican ciertos <strong>movimientos en nuestras vidas</strong> que muchas veces se transitan mejor si es acompañadxs. Ofrezco una manera respetuosa de mirar el momento en que te encontrás y de trabajar con los miedos, expectativas, frustraciones, cuestionamientos que estés atravesando.
              </p>
              <p className="text-black-10 mb-4 text-justify">
                <strong>No hay un camino único:</strong> a veces se necesita ayuda para ordenar nuestras ideas y sentimientos, otras para planificar. Otras veces los aconteceres azarosos nos hacen replantearnos nuestro camino. En ocasiones la ruta que nos habíamos planteado de antemano parece no estar funcionando, entonces es necesario deconstruirla y reconstruirla desde lo aprendido y vivido hasta ahora. Otras veces simplemente se trata de tomar decisiones que nos hagan sentido.
              </p>
              <p className="text-black-10 mb-4 text-justify">
                En todas estas situaciones un espacio privado, con una <strong>escucha orientada y respetuosa</strong> de la historia de cada quien, puede ayudar a transitarlas de una mejor manera.

</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-LuGreen py-5" id="needs">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-justify">
              <h1 className="display-4 text-white">¿Qué necesitás para iniciar este proceso?</h1>
              <hr className="divider solid my-3 luDivisorWhite" />
              <p className="text-white text-justify">-Una conexión estable a internet.
              </p>
              <p className="text-white text-justify">
                -Un espacio privado en el que te sientas cómodx para hablar durante el tiempo que dure el encuentro.
              </p>
              <p className="text-white text-justify">
                -Un dispositivo electrónico (celular, computadora, tablet) a través del cual nos encontraremos.
</p>
              {/* <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 text-black mt-2">¿Cómo empiezo?</h1>
              <hr className="divider solid my-3 luDivisorGreen" />
              <p className="text-black-10 mb-4 text-justify">Postulando a una <strong>Sesión de claridad: </strong>
              </p>
              <p className="text-black-10 mb-4 text-justify">
                Esta sesión <strong>gratuita</strong>, que dura entre 20 y 30 minutos, nos dará la oportunidad de conocernos y conversar sobre tus necesidades actuales. Así, podremos <strong>evaluar si están dadas las condiciones para trabajar juntxs.</strong>
                No es una sesión terapéutica.
              </p>
              <p className="text-black-10 mb-4 text-justify">
                Es un espacio privado en el que luego de escucharte, te diré si es espacio de trabajo que ofrezco se adecúa a lo que vos estás necesitando. En ese caso pautaremos las condiciones de trabajo (horario, honorarios, modalidad de los encuentros) para poder comenzar con el proceso.
                </p>
              <p className="text-black-10 mb-4 text-justify">
                En caso contrario, si considero que lo que yo ofrezco no es la mejor opción para vos en este momento, seré honesta y, en la medida de mis posibilidades, trataré de ofrecerte alguna alternativa que considere más adecuada a tus necesidades presentes.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <a href="https://calendly.com/lucilaarrua/sesion-de-claridad" className="btn btn-Lu">Postulá a una sesión de claridad</a>
          </div>
        </div>
      </section >
      <section className="py-5 bg-LuGreen" id="needs">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 text-white">¿Quién soy?</h1>
              <hr className="divider solid my-3 luDivisorWhite" />
              <p className="text-white text-justify">Lucila Arrúa.</p>
              <p className="text-white text-justify">
                Psicóloga * Viajera * Amante de las historias y las preguntas * Un poco existencialista
              </p>
              <p className="text-white text-justify">
                Me recibí de Lic. en Psicología en 2013. Ejercí 3 años y medio en Argentina y, si bien me apasionaba lo que hacía, no quería seguir relegando mi otra pasión, que es viajar.
              </p>
              <p className="text-white text-justify">
                Hace más de 3 años que vivo en movimiento. Viví en varios países, también recorrí otros. Me encanta el movimiento, la adaptación inicial a cada lugar, los desafíos: aprender a comunicarte en un idioma nuevo, aprender a comprar, a moverme en una ciudad o pueblo nuevo, conocer nuevas culturas, sentirme cuestionada al enfrentarme a diferentes modos de entender las mismas cosas.
              </p>
              <p className="text-white text-justify">
                Si bien durante este tiempo de movimiento no ejercí la psicología <strong>mi manera de mirar y entender el mundo nunca jamás dejó de estar teñida por ese posicionamiento que la psicología me da.</strong>
              </p>
              <p className="text-white text-justify">
                Hoy en día, con todos los avances tecnológicos, ya no es necesario tener que relegar una de mis pasiones en pos de la otra, ahora me di cuenta de que ¡puedo unir ambas! Ser psicóloga mientras me muevo.
                </p>
              <p className="text-white text-justify">
                Considero sumamente importante cruzarse con <strong>profesionales respetuosxs</strong> de las elecciones de vida de cada quien. Es por eso que me encantaría ofrecerte (a vos que sos viajerx o que sentís que no “encajás” en algún sentido) un espacio de escucha psicológica <strong>comprometida, que no juzga</strong> y que, por sobre todas las cosas, es <strong>humana.</strong>
              </p>
              {/* <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container"><div className="small text-center text-muted">Copyright © 2020 - Lic. Lucila Arrúa</div></div>
      </footer>
    </div >

  )
}
