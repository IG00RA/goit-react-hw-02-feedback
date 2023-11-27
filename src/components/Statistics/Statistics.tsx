import { AppState } from '../App';
import { StatList } from './Statistics.styled';

interface StatisticsProps extends AppState {
  total: () => number;
  positiveFeedback: () => number;
}

export const Statistics: React.FC<StatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) => {
  return (
    <StatList>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total()}</p>
      </li>
      <li>
        <p>Positive feedback: {positiveFeedback()}%</p>
      </li>
    </StatList>
  );
};
