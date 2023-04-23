import { FeedbackButtons } from 'components/FeedbackButtons/FeedbackButtons';
import PropTypes from 'prop-types';

export const Feedbacks = ({
  addBadFeedback,
  addNeutralFeedback,
  addGoodFeedback,
}) => {
  return (
    <FeedbackButtons
      addGoodFeedback={addGoodFeedback}
      addNeutralFeedback={addNeutralFeedback}
      addBadFeedback={addBadFeedback}
    />
  );
};

Feedbacks.propTypes = {
  addBadFeedback: PropTypes.func.isRequired,
  addNeutralFeedback: PropTypes.func.isRequired,
  addGoodFeedback: PropTypes.func.isRequired,
};
