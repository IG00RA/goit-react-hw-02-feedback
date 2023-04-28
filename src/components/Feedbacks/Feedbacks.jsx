import PropTypes from 'prop-types';
import { Button, ButtonList } from './Feedbacks.styled';

export const Feedbacks = ({ options, onAddFeedback }) => (
  <ButtonList>
    {options.map((option, i) => {
      return (
        <li key={option[i]}>
          <Button type={option} onClick={() => onAddFeedback(option)}>
            {option}
          </Button>
        </li>
      );
    })}
  </ButtonList>
);

Feedbacks.propTypes = {
  options: PropTypes.array.isRequired,
  onAddFeedback: PropTypes.func.isRequired,
};
