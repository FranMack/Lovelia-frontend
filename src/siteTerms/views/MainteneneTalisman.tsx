import { useEffect } from "react";
import { BackgroundVideo } from "../../ui/components";

export function MainteneneTalisman() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="siteTerms-container efectoReveal">
      <BackgroundVideo />

      <article className="siteTerms-center-container">
        <h3>Cuidado de los talismanes</h3>

        <h5>Cuidado General</h5>
        <p>
          Nuestros talismanes están fabricados en Plata 925 o en aleación de
          metales con un baño de oro. Con el cuidado y protección adecuados, tu
          talismán podrá conservarse en buen estado durante mucho tiempo. Aunque
          la Plata 925 es resistente y mantiene su brillo natural, puede
          oscurecerse debido a la exposición al aire o a la luz. Una limpieza
          periódica con un paño de joyería o de algodón ayudará a prevenir la
          suciedad y mantener su brillo. Las piedras requieren un trato
          delicado, evitando golpes y caídas que puedan dañarlos.
        </p>
        <h5>Limpieza de Talismanes de Plata 925</h5>
        <p>
          Para limpiar los talismanes, una de las opciones más seguras y
          sencillas es utilizar jabón neutro y agua tibia (no utilizar agua
          caliente porque puede aflojar la adhesión de las piedras), junto con
          un cepillo dental muy suave. Los cepillos de dientes son ideales para
          alcanzar áreas difíciles. Si la pieza está muy sucia, se recomienda
          dejarla en remojo durante 10 minutos antes de enjuagar con agua limpia
          y secarla con un paño suave y seco. Para blanquear la plata se puede
          lavar con una solución de bicarbonato y agua fría.
        </p>
        <h5>Cuidado Especial de Talismanes Chapados en Oro</h5>
        <p>
          Los talismanes chapados en oro requieren especial atención, ya que su
          recubrimiento puede desgastarse si no se cuidan adecuadamente. Es
          importante evitar el contacto directo con perfumes, cremas, maquillaje
          y otros productos químicos abrasivos. No se recomienda bañarse, hacer
          ejercicio o dormir con las joyas puestas. En verano, evita usarlas en
          piscinas o en el mar, ya que el cloro y el salitre pueden dañarlas. La
          velocidad con la que el recubrimiento de oro puede desvanecerse
          depende de varios factores, como el cuidado de la pieza, el uso de
          productos químicos, la transpiración y el pH de la piel. Por ello, es
          fundamental cuidar adecuadamente tus piezas chapadas en oro.
        </p>
        <h5>Cómo Guardar Tu Talismán</h5>
        <p>
          Para mantener tu talismán en óptimas condiciones, es aconsejable
          guardarlo en una bolsa individual, en su empaque original o en una
          caja cerrada. Evita guardarlas junto con otras joyas para prevenir
          rayones. Trata de evitar que entren en contacto con el aire, la luz
          directa o la humedad, ya que estos factores pueden causar deterioro en
          las piezas.
        </p>
      </article>
    </section>
  );
}
