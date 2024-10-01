import { useEffect } from "react";
import { BackgroundVideo } from "../../ui/components";
import { useNavigate } from "react-router";

const index = [
  "Compras",
  "Fotografía",
  "Método de pago",
  "Facturación",
  "Envíos",
  "Políticas de garantía",
  "Políticas de cambios de mercancía",
  "Mantenimiento y/o reparaciones",
  "Política de privacidad"
];


export function SiteTerms() {
  useEffect(()=>{window.scrollTo(0, 0);},[])
  

  /*const redirectTo = (path: string) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };*/

  const navigate=useNavigate()
  const linkToPrivacyTerms=()=>{
    navigate("politica-de-privacidad")
  }

  return (
    <section className="siteTerms-container efectoReveal">
      <BackgroundVideo />
      

      <article className="siteTerms-center-container">
        <h3>TERMINOS Y CONDICIONES</h3>

      
        <ol>
          {
            index.map((title)=>{
              return(<li key={title}>{title}</li>)
            })
          }
        </ol>
        <p>
          En primer término, es de vital importancia informarle, que la sola
          utilización del sitio <strong>www.lovelia.me</strong> le otorga al público en general o
          a quien lo use, la condición de usuario (en adelante referido como el
          "usuario" o los "usuarios") e implica la aceptación, plena e
          incondicional, de todas y cada una de las condiciones generales y
          particulares incluidas en estos términos de uso en la versión
          publicada por LOVELIA en el momento mismo en que el usuario acceda al
          sitio www.lovelia.me cualquier modificación a los presentes términos
          de uso será realizada cuando LOVELIA lo considere apropiado o
          necesario, siendo exclusiva responsabilidad del usuario, conocer tales
          modificaciones que siempre estarán publicadas en el sitio
          www.lovelia.me.
        </p>

        <p>
          En primer término, es de vital importancia informarle, que la sola
          utilización del sitio www.lovelia.me le otorga al público en general o
          a quien lo use, la condición de usuario (en adelante referido como el
          "usuario" o los "usuarios") e implica la aceptación, plena e
          incondicional, de todas y cada una de las condiciones generales y
          particulares incluidas en estos términos de uso en la versión
          publicada por LOVELIA en el momento mismo en que el usuario acceda al
          sitio www.lovelia.me cualquier modificación a los presentes términos
          de uso será realizada cuando LOVELIA lo considere apropiado o
          necesario, siendo exclusiva responsabilidad del usuario, conocer tales
          modificaciones que siempre
        </p>

        <p>
          A través de su Sitio Web, LOVELIA proporciona información acerca de
          los productos y servicios que presta, ofreciendo la posibilidad de
          adquirir mercancías y servicios, previo cumplimiento de los requisitos
          establecidos por LOVELIA que se indican con posterioridad. Los
          productos y servicios ofrecidos por LOVELIA se dirigen única y
          exclusivamente a personas con plena capacidad y legitimación para
          obligarse de conformidad con el convenio de adhesión que más adelante
          se indica.
        </p>

        <p>
          Convenio de adhesión para uso de sitio de internet, que celebran por
          una parte LOVELIA S.A. de y/o sus filiales (en lo sucesivo LOVELIA) y,
          por la otra, el usuario, sujetándose ambas partes, a lo establecido en
          el presente convenio.
        </p>

        <h5>Compras</h5>
        <p>
          Todas las ventas son finales. Para realizar cualquier compra es
          necesario ingresar los datos requeridos por el formulario. Para
          comprar debes agregar los productos en el carrito de compra y
          seleccionarlos desde nuestra tienda online de productos. Una vez
          seleccionado el producto a comprar favor de seguir los pasos del sitio
          para concretar tu compra. Para realizar los pagos de los productos y/o
          servicios adquiridos a través de EL PORTAL y/o LA APLICACIÓN, utiliza
          los servicios ofrecidos por MERCADO PAGO y PAYPAL.
        </p>
        <h5>Fotografía</h5>
        <p>
          La fotografía del producto no es contractual, es decir, los colores
          pueden tener diferente tonalidad en diferentes pantallas de ordenador
          o en impresiones, así como la imagen siempre puede variar un poco de
          la realidad. La pieza final puede variar ligeramente debido a su
          fabricación a mano y por las gemas involucradas en la pieza ya que las
          mismas son naturales y únicas.
        </p>

        <h5>Método de pago</h5>
        <p>
          Aceptamos Mercado Pago y PayPal. Tus datos personales de pago están
          protegidos y no son visibles para el sitio.
        </p>

        <h5>Facturación</h5>
        <p>
          Por disposición fiscal, la factura se expedirá conforme a los datos
          que se proporcionen a través del pedido. La fecha de facturación
          deberá coincidir con la fecha en que el pago se haya efectuado. En
          caso de no proporcionar el RFC (Registro Federal de Contribuyentes) de
          la persona a la que se le facturará, no se podrá separar el importe
          del IVA (Impuesto al Valor Agregado), es decir, este vendrá incluido
          en el precio total de los productos.
        </p>
        <p>
          UNA VEZ EFECTUADA LA FACTURA CON LOS DATOS PROPORCIONADOS, NO SE
          PODRÁN HACER CAMBIOS NI CANCELACIONES. En virtud de lo anterior,
          suplicamos verificar muy bien los datos a facturar antes de proceder a
          efectuar su pedido.
        </p>
        <h5> Envíos </h5>
        <p>
          Por el momento solo realizamos envíos dentro de la República Mexicana
          a través de los servicios de paquetería DHL.
        </p>
        <p>
          os tiempos de envío dentro de la república mexicana son de 1 a 4 días
          hábiles, exceptuando zonas no comunes de entrega, podrían tardar hasta
          10 días hábiles y en envíos a Estados Unidos de 3 a 7 días hábiles
          cuando las piezas están en existencia, de lo contrario debido a su
          tiempo de producción el tiempo estimado de entrega es de 14 días
          hábiles.
        </p>
        <p>
          {" "}
          En caso de que se presente algún retraso en la entrega de su pedido o
          que la pieza se encuentre agotada al momento de hacer la compra, nos
          pondremos en contacto ya sea por correo electrónico.
        </p>
        <p>
          Al recibir tu paquete, te recomendamos revisar que no presente ningún
          defecto o alteración, de ser así te pedimos por favor no recibirlo,
          anotar los comentarios en la boleta de la mensajería y reportarlo de
          inmediato vía correo electrónico a hola@lovelia.me de lo contrario
          LOVELIA no se hará responsable por los daños que puedan presentar los
          productos.
        </p>
        <h5>Políticas de garantía</h5>
        <p>
          LOVELIA otorga a todos los productos una garantía contra defectos de
          materiales y mano de obra durante un período de TRES (3) MESES a
          partir de la fecha de compra original.
        </p>
        <p>
          Durante este período de garantía, si surge algún defecto en el
          producto, LOVELIA evaluará la pieza y podrá (I) reparar el producto
          con partes nuevas o reacondicionadas; (II) reemplazar el producto por
          un nuevo que sea igual al adquirido en la compra original.
        </p>
        <p>
          LOVELIA no tiene obligación de reparar, reemplazar o reembolsar el
          producto defectuoso hasta que este sea devuelto. Esta garantía no se
          aplica a los daños causados por accidente o mal uso de los productos
          de LOVELIA.
        </p>
        <p>
          Para hacer válida tu garantía es necesario comunicarte con nuestro
          personal de atención a clientes notificándolo al correo
          hola@lovelia.me.
        </p>

        <h5>Políticas de cambios de mercancía</h5>
        <p>
          Todas las ventas son finales, LOVELIA no hace reembolsos, sólo hace
          cambios por mercancía u otorga vales por el importe pagado, mismo que
          no tendrá fecha de expiración.
        </p>
        <p>
          Si existe una equivocación en el artículo enviado o recibiste un
          producto defectuoso al momento de la entrega, deberás comunicarte
          dentro de los primeros 15 días hábiles y notificar dicho error al
          correo electrónico: hola@lovelia.me .
        </p>
        <p>
          Para que el cambio o devolución de la pieza sea válida, ésta deberá
          contar con su etiqueta y empaque original, así como presentar el
          recibo de compra. El costo del envío por devolución corre por parte
          del cliente.
        </p>
        <p>
          La pieza deberá ser enviada a la dirección que se informe en el correo
          que recibirás aceptando la devolución o cambio del producto.
        </p>
        <p>
          El cambio de la pieza se hará por una de igual o con mayor valor
          (diferencia que el cliente deberá cubrir) o bien si es por una de
          menor valor se entregará un vale por la cantidad sobrante que podrá
          ser utilizado en tu siguiente compra.
        </p>

        <h5>Mantenimientos y/o reparaciones</h5>
        <p>
          Si deseas hacer alguna reparación o mantenimiento de tu pieza, por
          favor envía un correo con la foto del producto a hola@lovelia.me para
          evaluar y generar una cotización en caso de que aplique algún costo.
        </p>
        <p>LOVELIA no hace reparaciones de piezas que no sean de la marca.</p>

        <h5>Política de privacidad</h5>
        <p>A través de este <strong onClick={linkToPrivacyTerms}>link</strong> se puede obtener dicha información. </p>
      </article>
    </section>
  );
}
