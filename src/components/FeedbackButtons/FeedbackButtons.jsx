import PropTypes from 'prop-types';

export const FeedbackButtons = ({
  addBadFeedback,
  addNeutralFeedback,
  addGoodFeedback,
}) => {
  return (
    <ul>
      <li>
        <button onClick={addGoodFeedback}>Good</button>
      </li>
      <li>
        <button onClick={addNeutralFeedback}>Neutral</button>
      </li>
      <li>
        <button onClick={addBadFeedback}>Bad</button>
      </li>
    </ul>
  );
};

FeedbackButtons.propTypes = {
  addBadFeedback: PropTypes.func.isRequired,
  addNeutralFeedback: PropTypes.func.isRequired,
  addGoodFeedback: PropTypes.func.isRequired,
};
