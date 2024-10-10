import { useEffect } from "react";
import { BackgroundVideo } from "../../ui/components";

 function ChangesAndWarranty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="siteTerms-container efectoReveal">
      <BackgroundVideo />

      <article className="siteTerms-center-container">
        <h3>Cambios y Garantías</h3>

        <h5>Cambios</h5>
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
          del cliente. L
        </p>
        <p>
          a pieza deberá ser enviada a la dirección que se informe en el correo
          que recibirás aceptando la devolución o cambio del producto.
        </p>
        <p>
          El cambio de la pieza se hará por una de igual o con mayor valor
          (diferencia que el cliente deberá cubrir) o bien si es por una de
          menor valor se entregará un vale por la cantidad sobrante que podrá
          ser utilizado en tu siguiente compra.
        </p>
        <h5>Garantía</h5>
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
          {" "}
          Para hacer válida tu garantía es necesario comunicarte con nuestro
          personal de atención a clientes notificándolo al correo
          hola@lovelia.me .
        </p>
      </article>
    </section>
  );
}

export default ChangesAndWarranty;