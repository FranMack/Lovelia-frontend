import { ButtonTransparent } from "../../ui/components";

interface MessageSendOptions {
  handleMessage: () => void;
}

export const MessageSend = ({ handleMessage }: MessageSendOptions) => {
  return (
    <div className="popUp-container efectoReveal">
      <h4>¡Gracias por tu consulta!</h4>
      <p>Nos comunicaremos de regreso pronto!</p>

      <div className="button-auxiliar-container">
        <ButtonTransparent
          text="ENVIAR OTRA CONSULTA"
          backgroundColor="#ECEA60"
          onClick={handleMessage}
        />
      </div>
    </div>
  );
};
