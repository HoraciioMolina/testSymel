import CardAbout from "../UI/cardAbout/index";
import { AboutUsContainer } from "./style"
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import SecurityIcon from '@material-ui/icons/Security';


const AboutUs = (props) =>{
    

    const styles = { 
        transform: `scale(${4})`,
        color: "white",
    };

    return (
      <AboutUsContainer>
        <CardAbout
          animationTime={"0.7s"}
          title="¿Quienes somos?"
          text="Somos el unico proveedor de la provincia de Rio Grande que brinda exclusivamente el servicio de internet con fibra optica directa a los hogares, empresas y pymes, lo que nos permite prestar una calidad y velocidad en nuestro servicio que no tiene competencia. Al crecer el consumo de video y dispositivos conectados, mayor es la necesidad de una internet de fibra optica enfocada en la calidad y rapidez, y Symel es la empresa que se adapta a una comunidad con mayor necesidad y conectividad."
          icon={<PersonIcon style={styles} />}
        />
        <CardAbout
          animationTime={"0.8s"}
          title="Nuestro internet"
          text="Gracias a nuestro internet de fibra optica, brindamos un excelente servicio, a traves de la ultima tecnologia de GPON, llegamos al hogar del cliente, logrando con sus caracteristicas una serie de ventajas que incluyen alta capacidad, rango y reduccion de volumen de fibras utilizadas, lo que hace que proporcione estabilidad y escalabilidad en la conexion de tu lugar."
          icon={<LanguageIcon style={styles} />}
        />
        <CardAbout
          animationTime={"0.9s"}
          title="Confiabilidad del servicio"
          text="Brindamos un servicio que surge de una necesidad de comunicacion que existe en la poblacion; comprometidos con la sociedad, nuestros profesionales, con años de trayectoria en el rubro, siempre han cumplido con su trabajo, es esta la razon por la que nos sentimos unicos y autenticos. Y para ser transparentes hemos creadado nuestras redes para estar mas cerca de nuestros clientes y recibir sus criticas."
          icon={<SecurityIcon style={styles} />}
        />
      </AboutUsContainer>
    );
}

export default AboutUs