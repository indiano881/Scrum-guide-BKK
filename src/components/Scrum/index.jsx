const Scrum = ({ title, content1, content2, content3, content4, content5, content6, linkText }) => {
  return (
    <div id={linkText}>
      <h3>{title}</h3>
      <p>{content1}</p>
      <p>{content2}</p>
      <p>{content3}</p>
      <p>{content4}</p>
      <p>{content5}</p>
      <p>{content6}</p>
    </div>
  );
};

export default Scrum;
