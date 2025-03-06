import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_item, index) => (
        <span>
          {value >= index + 1 ? (
            <FaStar />
          ) : value >= index + 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
