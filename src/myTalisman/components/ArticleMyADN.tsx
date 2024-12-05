interface ArticleMyADNProps {
  title: string;
  text: string | string[]
}

export const ArticleMyADN = ({ title, text }: ArticleMyADNProps) => {
  return (
    <div className="dropDownMyTalisman-card-container">
      <h5>{title.toUpperCase()}</h5>
      {Array.isArray(text) ? text.map((item, i) => {
        return <p key={i}>{item}</p>;
      }):<p >{text}</p>}
    </div>
  );
};
