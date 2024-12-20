import './card.styles.css';

const Card = (props: { title: string; photo: string }) => {
  const { title, photo } = props;
  console.log(photo);
  return (
    <div className="container">
      <div className="title">{title}</div>
      <div className="image">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Card;
