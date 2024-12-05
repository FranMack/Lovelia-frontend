import {useChatBot} from '../../hooks/useChatBot';

export const ChatBot = () => {
  const {
    messages,
    input,
    isOpen,
    setInput,
    setIsOpen,
    handleSend,
    handleKeyDown,
  } = useChatBot();

  return (
    <>
      {isOpen ? (
        <div className="chat-container">
          <button className="chat-minimize" onClick={() => setIsOpen(false)}>
            -
          </button>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === 'user' ? 'user-message' : 'bot-message'
                }`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for Enter key press
              placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      ) : (
        <div className="chat-bubble" onClick={() => setIsOpen(true)}>
          💬
        </div>
      )}
    </>
  );
};
