import React, { useRef} from 'react';
import './css/openLetter.css';
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from "react-router-dom";
import HeartBackground from './backgrounds/heartBackground';
import RabbitAnimation from './rabbit/rabbitAnimation';


export default function Letter() {
  const contenedorRef = useRef();
  const mensajeRef = useRef();
  const superiorRef = useRef();
  const iconoRef = useRef();
  const h1Ref = useRef();
  const pRef = useRef();

  const navigate = useNavigate();

  const handleClickFireworks = () => {
      navigate('/favorites')
  };

  const abrirCarta = () => {

    superiorRef.current.classList.add("abrir-superior");

    h1Ref.current.style.transform = "translateY(-120px)";
    pRef.current.style.transform = "translateY(-120px)";
    h1Ref.current.style.transition = "transform 0.65s ease-in-out";
    pRef.current.style.transition = "transform 0.65s ease-in-out";

    iconoRef.current.classList.add("bx-rotada");

    // setTimeout(() => {
    //   superiorRef.current.style.zIndex = -1;
    //   mensajeRef.current.classList.add("abrir-mensaje");
    // }, 700);
    setTimeout(() => {
      if (superiorRef.current && mensajeRef.current) {
        superiorRef.current.style.zIndex = -1;
        mensajeRef.current.classList.add("abrir-mensaje");
      }
    }, 700);

  };

  const cerrarCarta = () => {
    mensajeRef.current.classList.remove("abrir-mensaje");

    setTimeout(() => {
      h1Ref.current.style.transform = "translateY(0px)";
      pRef.current.style.transform = "translateY(0px)";

      superiorRef.current.style.zIndex = 0;
      superiorRef.current.classList.remove("abrir-superior");

      iconoRef.current.classList.remove("bx-rotada");
    }, 700);
  };

  return (
    <div className="carta-romantica">
      <HeartBackground/>
      <h1 className='text-light' ref={h1Ref}>¡Abre la Carta mi Amor 🥰!❤️</h1>
      <p className="psorpresa text-light" ref={pRef}>Una pequeña sorpresa para usted Conejita...</p>

      <div className="contenedor" ref={contenedorRef} onClick={abrirCarta}>
        <div className="superior" ref={superiorRef}></div>
        <div className="mensaje" ref={mensajeRef}>
          <div className="contenidoScroll text-dark">

          Mi amor, hoy cumplimos 30 días de noviazgo.
          Y si hay algo que he aprendido en este tiempo, es que nunca en mi vida había conocido a alguien tan especial como tú. Le agradezco muchísimo a Dios por haberte puesto en mi camino.

          Desde el primer momento en que te vi, una voz insistente en mi mente me dijo: "Escríbele, tu futuro está ahí." Y desde que comenzamos a hablar, te convertiste en mi pensamiento constante. Mis problemas se volvían pequeños porque tú llenabas mi mente con paz y alegría.

          Cuando noté que coincidíamos en tantas cosas, no soportaba la idea de que alguien más te tuviera. Por eso, cuando me declaré, lo hice con el corazón decidido, para que nadie más pudiera obtener ese tesoro tan valioso que había encontrado en ti.

          Cuando me dijiste que sí… esa noche no pude dormir. Mi mente no dejaba de pensar en ti. Aquel “sí” expandió mi mundo, me abrió posibilidades que nunca imaginé. A pesar del poco tiempo que llevábamos conversando, sentía que te conocía de mucho antes.

          Ahora que ya llevamos 30 días como novios, ¡me encanta lo que hemos construido en tan poco tiempo!
          Esa confianza de contarnos todo, de hablar sin filtros, es una de las cosas que más valoro.
          Gracias por dejarme ser parte de tu vida.
          Y aunque por ahora nuestra relación sea a distancia, sé que llegará el momento en que pueda decirte “buenos días” o “buenas noches” sin tener que agarrar el celular... porque estarás a mi lado.

          Gracias por darme una felicidad que no puedo explicar.
          Tú cambiaste mi forma de ver la vida.
          Cambiaste parte de mi carácter.
          Me hiciste conocerme más a mí mismo, porque al conocerte a ti vi un nuevo camino: uno en el que la meta es amarte, cuidarte y aprender de ti.

          Mi conejita guerrera, me enseñaste a ser insistente.
          A ver los obstáculos como retos, no como muros.
          Me has ayudado a superar muchas cosas, y por eso siempre te he admirado… y te seguiré admirando, porque nunca dejas de impresionarme.

          Eres todo lo que siempre soñé.
          Me encanta todo de ti.
          Cada vez que me mandas audios… los escucho hasta 20 veces, solo para volver a oír tu voz. Lo sé, suena obsesivo… pero es que ya te lo dije: eres mi obsesión más hermosa.

          Me gusta hablar contigo todos los días, porque es mi momento favorito del día.
          Me siento cómodo, me haces bien.
          A veces te espero con ansias solo para hablar por las noches, aunque eso signifique dormir tarde. Porque cuando hablo contigo, el tiempo se va volando y siempre deseo que dure más.

          Quiero aprovechar cada minuto contigo para enamorarte más, porque yo ya perdí el juego de quién se enamora primero.
          Y aunque ya estoy profundamente enamorado, me sigo enamorando todos los días.

          Mi venganza será que tú también te enamores cada día de mí, hasta llegar al punto en que mi opinión, mi presencia, mi amor… se vuelvan valiosos para ti.

          No planeo algo temporal contigo.
          Yo planeo algo que dure para siempre.

          A veces me distraigo en el trabajo solo por imaginar cómo será nuestro futuro juntos, y sí, a veces me regañan por eso, pero ¿cómo les explico que estoy pensando en la mujer que más quiero en este mundo?

          Tus ojos me hipnotizan.
          Cuando veo tus fotos, me pierdo en ellos.
          Tu rostro, es la belleza más perfecta que existe.
          Tu cabello, sueño con acariciarlo.
          Tu cuerpo, deseo abrazarte, llenarte de besos todo el día si fuera posible.

          Cuando escucho tu voz, no hay música, melodía ni canción que se compare.
          Tu voz tan tierna me hace querer escucharla todo el día.

          Me encanta tu carácter: eres única, genuina, inigualable.
          Admiro tus metas, tu visión, tus sueños.
          Y aunque algunos sueños sean complicados, quiero estar a tu lado para apoyarte en cada paso, en cada lucha, en cada logro.

          Aunque por ahora la distancia nos separe, nada impedirá que esté aquí para ti.
          Porque mi mayor razón es verte feliz, verte sonreír, verte cumplir tus sueños.
          <br />
          y bueno he estado esperando el momento de poder decirte el más grande “te quiero”,
          Pero hoy, con más confianza y seguridad que nunca, te digo:
          Te amo💘.
          Eres lo mejor que me ha pasado en la vida.
          Eres mi conejita preciosa,
          Y quiero que seas toda mía…
          <br />
          ¡Te amooooooooooo! ❤️🐰😍

        <br />
        <br />
        <p>Atte.: Tu pollito 🐣</p>

        <button className='btn btn-outline-primary' onClick={handleClickFireworks}>quieres ver algo mas
          preciona? Click aqui 😁!
        </button>
          </div>
        </div>
        <div className="carta">
          <i className="bx bxs-heart" ref={iconoRef}></i>
        </div>
      </div>

      <div className="botones">
        <button className="boton" onClick={abrirCarta}>Abrir</button>
        <button className="boton" onClick={cerrarCarta}>Cerrar</button>
      </div>
      <br />
      <br />
      <RabbitAnimation/>
    </div>
  );
}
