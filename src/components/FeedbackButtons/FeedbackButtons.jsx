import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackButtons.styled';

export const FeedbackButtons = ({
  addBadFeedback,
  addNeutralFeedback,
  addGoodFeedback,
}) => {
  return (
    <ButtonList>
      <li>
        <Button type={'good'} onClick={addGoodFeedback}>
          Good
        </Button>
      </li>
      <li>
        <Button type={'neutral'} onClick={addNeutralFeedback}>
          Neutral
        </Button>
      </li>
      <li>
        <Button type={'bad'} onClick={addBadFeedback}>
          Bad
        </Button>
      </li>
    </ButtonList>
  );
};

FeedbackButtons.propTypes = {
  addBadFeedback: PropTypes.func.isRequired,
  addNeutralFeedback: PropTypes.func.isRequired,
  addGoodFeedback: PropTypes.func.isRequired,
};
