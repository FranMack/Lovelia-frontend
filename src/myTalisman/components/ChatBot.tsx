import { useEffect, useRef } from 'react';
import { useChatBot } from '../../hooks/useChatBot';
import { MyAdnProps } from '../interface/myAdn.interface';

interface ChatBotProps {
  astroData: MyAdnProps;
}

export const ChatBot = ({ astroData }: ChatBotProps) => {
  const {
    messages,
    input,
    isOpen,
    setInput,
    setIsOpen,
    handleSend,
    handleKeyDown,
  } = useChatBot(astroData);

  // Referencia para el contenedor de los mensajes
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Desplazar al final cuando los mensajes cambian
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  // Desplazar al final cuando se abre el chat
  useEffect(() => {
    if (isOpen && chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [isOpen]); // Se ejecuta cada vez que el chat se abre


  console.log("xxxxxxxxxxxxxxx",astroData)

  return (
    <>
      {isOpen ? (
        <div className="chat-container">
          <button className="chat-minimize" onClick={() => setIsOpen(false)}>
            -
          </button>
          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === 'user' ? 'user-message' : 'bot-message'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Escucha la tecla Enter
              placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      ) : (
        <div className="chat-bubble efectoRevealTalisman" onClick={() => setIsOpen(true)}>
          💬
        </div>
      )}
    </>
  );
};
