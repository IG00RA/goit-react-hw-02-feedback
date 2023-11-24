import { Button, ButtonList } from './Feedbacks.styled';
import { FeedbackIncrement } from '../App';

interface FeedbacksProps {
  options: string[];
  onAddFeedback: FeedbackIncrement;
}

export const Feedbacks: React.FC<FeedbacksProps> = ({
  options,
  onAddFeedback,
}) => (
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
