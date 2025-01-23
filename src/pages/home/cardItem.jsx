import PropTypes from 'prop-types';

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={props.path} target="_blank">
          <figure 
            className="cards__item__pic-wrap" 
            data-category={props.label} 
            style={{ background: "black" }}
          >
            <img
              className="cards__item__img"
              alt="Awards"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}
CardItem.propTypes = {
  src: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardItem;
