interface OptionsButton {
  text: string;
  onClick?: () => void;
}

export function Button({text, onClick}: OptionsButton) {
  return (
    <button onClick={onClick} className="purple-button">
      {text}
    </button>
  );
}
