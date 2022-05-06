import './styles/styles.css';
import logo from './imagenes/logo.png';
import adu from './imagenes/adu.jpg';
import tienda from './imagenes/tienda.jpg'
import atencion from './imagenes/atencion.jpg'

function App() {
  return (
    <div className="App">
    
    <header>
        <div className="imgcorp">
            <a href="https://www.facebook.com/artedigitalurbanoadu">
                <img src={logo} href className="isotipo"/>
            </a>
                
            <h2 className="logo"> <a href="#">ARTE DIGITAL URBANO</a></h2>
        </div>
        <input type="checkbox" name="" id="check"/>
        <label for="check" className="mostrar-menu">
            &#8801   
        </label>
        <nav className="menu">
            <a href="#">INICIO</a>
            <a href="#">A.D.U</a>
            <a href="#">TIENDA</a>
            <a href="#">CONTACTO</a>
            <label for="check" className="esconder-menu">
                &#215
            </label>
        </nav>
    </header>
    <section id="banner">
        <div className="contenido-banner">
            <h2><span>A.D.U -</span> ARTE DIGITAL URBANO <br/> DISEÑO E IMPRESIÓN</h2>
            <a href="#" className="boton-empezar">ACCESO</a>
        </div>
    </section>
    <section id="personas">
        <div>
            <img src={adu} alt='adu' />
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="boton-saber-mas">Saber Más</a>         
        </div>
        <div>
            <img src={tienda} alt=""/>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="boton-saber-mas">Saber Más</a>         
        </div>
        <div>
            <img src={atencion} alt=""/>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="boton-saber-mas">Saber Más</a>         
        </div>
    </section>
    <section id="iconos">
        <div className="contenido-iconos">
            <div>
                <i className="fa-solid fa-pen-nib fa-4x"></i>
                <h6>Diseño</h6>
                <p>Lorem ipsum dolor sit</p>
            </div>
            <div>
                <i className="fa-solid fa-fingerprint fa-4x"></i>
                <h6>Impresión</h6>
                <p>Lorem ipsum dolor sit</p>
            </div>
            <div id="icono-estampado">
                <i className="fa-brands fa-screenpal fa-4x"></i>
                <h6>Estampados</h6>
                <p>Lorem ipsum dolor sit</p>
            </div>    
        </div>
        <div className="boton-iconos">
            <a href="#" className="boton-saber-mas-iconos">Saber Más</a>
        </div>
     </section>

    <section id="contacto">
        <h4>CONTACTA CON NOSOTROS</h4>
        <form action="#">
            <div className="datos-form">
                <div className="nombre">
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre"
                    placeholder="Nombre"/>
                </div>
                <div className="email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email"
                    placeholder="Email"/>
                </div>
            </div>
            <div className="mensaje">
                <label for=" mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30"
                rows="10" placeholder="Mensaje"></textarea>
            </div>
            <div className="boton-formulario">
                <a href="#" className="boton-saber-mas-form">Enviar Mensaje</a>

            </div>
        </form>

    </section>
    <footer>
        <p>&copy2022 KIADOM</p>
    </footer>

    </div>
  );
}

export default App;
