const Scrum = ({ title, content1, content2, content3, linkText }) => {
  return (
    <div id={linkText}>
      <h3>{title}</h3>
      <p>{content1}</p>
      <p>{content2}</p>
      <p>{content3}</p>
    </div>
  );
};

export default Scrum;