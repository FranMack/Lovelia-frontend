import { useContext, useEffect } from "react";
import { BackgroundVideo } from "../../ui/components";
import { TimerContext } from "../../context/timerContext";
import { ShopingCartContext } from "../../context";



 function PrivacyTerms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)


  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
    <section className="siteTerms-container efectoReveal">
      <BackgroundVideo />

      <article className="siteTerms-center-container">
        <h3>Aviso de privacidad</h3>

        <p>
          ESTE AVISO DE PRIVACIDAD FORMA PARTE DEL USO DEL SITIO WEB/APP
          www.lovelia.me
        </p>
        <h5>Responsable</h5>
        <p>
          En cumplimiento a la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares, LOVELIA (en adelante LOVELIA) le informa
          que LOVELIA es responsable de sus datos personales. El "Usuario" podrá
          contactar a LOVELIA en cualquier momento a través de nuestro correo
          electrónico hola@lovelia.me Protegemos y salvaguardamos sus datos
          personales para evitar el daño, pérdida, destrucción, robo, extravío,
          alteración, así como el tratamiento no autorizado de sus datos
          personales.
        </p>
        <h5>Datos Personales</h5>
        <p>
          La información deberá ser veraz y completa. El usuario responderá en
          todo momento por los datos proporcionados y en ningún caso LOVELIA
          será responsable de la veracidad de los mismos.
        </p>
        <p>
          La información solicitada al usuario en el sitio www.lovelia.me es:
          nombre completo, teléfonos, dirección postal, correo electrónico,
          datos de facturación. Cuando el usuario se suscriba al Talismán
          Digital, se adicionará a la información solicitada: fecha, hora y
          lugar de nacimiento. Sus datos personales serán tratados en base a los
          principios de licitud, consentimiento, información, calidad,
          finalidad, lealtad, proporcionalidad y responsabilidad en términos de
          la Legislación. Se mantendrá la confidencialidad de sus datos
          personales estableciendo y manteniendo de forma efectiva las medidas
          de seguridad administrativas, técnicas y físicas, para evitar su daño,
          pérdida, alteración, destrucción, uso, acceso o divulgación indebida.
        </p>
        <h5>Qué son las cookies y cómo se utilizan</h5>
        <p>
          La aceptación de las cookies no es un requisito para visitar nuestra
          página. Sin embargo, nos gustaría señalar que el uso del "carrito" en
          LOVELIA y orden, sólo es posible con la activación de las cookies. Las
          cookies son pequeños archivos de texto que identifican a tu
          computadora con nuestro servidor como un usuario único cuando tú
          visitas ciertas páginas en nuestro sitio y que son guardados por tu
          navegador de internet en el disco duro de tu computadora.
        </p>
        <p>
          Las cookies se pueden utilizar para reconocer tu dirección de
          protocolo de internet, que te ahorra tiempo mientras quieres entrar a
          nuestro sitio. Sólo utilizamos cookies para tu comodidad en el uso de
          LOVELIA (por ejemplo, para recordar quién eres cuando deseas modificar
          tu carrito de compra sin tener que volver a introducir tu dirección de
          correo electrónico) y no para obtener o usar cualquier otra
          información (por ejemplo de publicidad segmentada).
        </p>
        <p>
          Tu navegador puede ser configurado para no aceptar cookies, pero esto
          sería restringir el uso de nuestra página. Por favor, acepta nuestra
          garantía de que el uso de cookies no contiene datos de carácter
          personal o privado, y están libres de virus. Si deseas obtener mas
          información acerca de las cookies, ve a
          http://www.allaboutcookies.org, y para obtener información sobre la
          eliminación de ellos desde el navegador, ve a
          http://www.allaboutcookies.org/manage-cookies/index.html.
        </p>
        <p>
          En el caso de empleo de cookies, el botón de "ayuda" que se encuentra
          en la barra de herramientas de la mayoría de los navegadores, le dirá
          cómo evitar aceptar nuevos cookies, cómo hacer que el navegador le
          notifique cuando recibe un nuevo cookie o cómo deshabilitar todos los
          cookies.
        </p>
        <h5>Uso de la información</h5>
        <p>
          La información solicitada permite a LOVELIA contactar a los usuarios y
          potenciales clientes cuando sea necesario para completar los
          procedimientos de compra. Asimismo LOVELIA utilizará la información
          obtenida para:
          <ul>
            <li>Procurar un servicio eficiente.</li>
            <li>
              Informar sobre nuevos productos o servicios que estén relacionados
              con el contratado o adquirido por el cliente.
            </li>
            <li>Informar sobre nuevos productos o servicios que estén relacionados con el contratado o adquirido por el cliente.</li>
            <li>Informar sobre cambios de nuestros productos o servicios.</li>
            <li>Proveer una mejor atención al usuario. </li>
          </ul>
        </p>

        <h5>Limitación de uso y divulgación de la información</h5>
        <p>
          En nuestro programa de notificación de promociones, ofertas y
          servicios a través de correo electrónico, sólo LOVELIA tiene acceso a
          la información recabada. Este tipo de publicidad se realiza mediante
          avisos y mensajes promocionales de correo electrónico, los cuales sólo
          serán enviados a usted y a aquellos contactos registrados para tal
          propósito, esta indicación podrá usted modificarla en cualquier
          momento enviando un correo a hola@lovelia.me En los correos
          electrónicos enviados, pueden incluirse ocasionalmente ofertas de
          terceras partes que sean nuestros socios comerciales.
        </p>
        <h5>Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h5>
        <p>
          El área responsable del manejo y la administración de los datos
          personales es:
        </p>
        <p>
          Servicio al Cliente a quien puede contactar mediante en el correo
          electrónico hola@lovelia.me
        </p>
        <h5>
          Para ejercer sus derecho ARCO y revocar el consentimiento otorgado.
        </h5>
        <p>
          Como titular de datos personales, el "Usuario" podrá ejercitar los
          derechos ARCO (acceso, cancelación, rectificación y oposición al
          tratamiento de sus datos personales), o bien, revocar el
          consentimiento que haya otorgado a LOVELIA , para el tratamiento de
          sus datos personales, enviando directamente su solicitud al área
          Servicio de Atención al Cliente a través de la cuenta de correo
          electrónico: hola@lovelia.me . servicio eficiente y personalizado.
        </p>
        <p>
          Dicha solicitud deberá contener por lo menos: (a) nombre y domicilio u
          otro medio para comunicarle la respuesta a su solicitud; (b) los
          documentos que acrediten su identidad o, en su caso, la representación
          legal; (c) la descripción clara y precisa de los datos personales
          respecto de los que se solicita ejercer alguno de los derechos ARCO,
          (d) la manifestación expresa para revocar su consentimiento al
          tratamiento de sus datos personales y por tanto, para que no se usen;
          (d) cualquier otro elemento que facilite la localización de los datos
          personales. Su petición deberá ir acompañada de los fundamentos por
          los que solicita dicha revocación y una identificación oficial del
          titular de los datos o de su apoderado. En un plazo máximo de 20
          (veinte) días hábiles atenderemos su solicitud y le informaremos sobre
          la procedencia de la misma a través del correo electrónico del que
          provenga la petición. LOVELIA solicita al usuario que actualice sus
          datos cada vez que éstos sufran alguna modificación, ya que esto
          permitirá brindarle un{" "}
        </p>
        <h5>Transferencias de información con terceros</h5>
        <p>
          LOVELIA únicamente realiza remisiones de datos para cumplir con las
          obligaciones contraídas con los clientes. LOVELIA sólo compartirá
          datos cuando haya sido requerido por orden judicial para cumplir con
          las disposiciones procesales.
        </p>
        <h5>Protección</h5>
        <p>
          Al momento de comprar un producto en línea, se pedirán datos bancarios
          para los cuales le ofrecemos seguridad y confidencialidad de los datos
          que proporciona, ya que contamos con un servidor seguro bajo el
          protocolo SSL (Secure Socket Layer) de tal manera que la información
          que envían, se transmite encriptada para asegurar su protección. Para
          verificar que se encuentra en un entorno protegido, asegúrese de que
          aparezca una "S" en la barra de navegación "httpS"://. Sin embargo, y
          a pesar de contar cada día con herramientas más seguras, la protección
          de los datos enviados a través de Internet no se puede garantizar al
          100%; por lo que una vez recibidos, se hará todo lo posible por
          salvaguardar la información.
        </p>
        <h5>Cambios en el aviso de privacidad</h5>
        <p>
          Nos reservamos el derecho de efectuar en cualquier momento
          modificaciones o actualizaciones al presente aviso de privacidad, para
          la atención de novedades legislativas o jurisprudenciales, políticas
          internas, nuevos requerimientos para la prestación u ofrecimiento de
          nuestros servicios o productos y prácticas del mercado. Estas
          modificaciones estarán disponibles al público a través de nuestra
          página de Internet www.lovelia.me, sección aviso de privacidad.
        </p>
        <h5>Aceptación de los términos y condiciones</h5>
        <p>
          Esta declaración de Privacidad está sujeta a los términos y
          condiciones del sitio web de LOVELIA antes descrito, lo cual
          constituye un acuerdo legal entre el usuario y LOVELIA. Si el usuario
          utiliza los servicios del sitio de LOVELIA , significa que ha leído,
          entendido y acordado los términos antes expuestos.
        </p>
      </article>
    </section>
    </main>
  );
}

export default PrivacyTerms;