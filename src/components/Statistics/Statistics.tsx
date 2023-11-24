import { StatList } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
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
