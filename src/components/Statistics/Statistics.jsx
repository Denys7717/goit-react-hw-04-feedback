import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.statisticTitle}>Statistics</h2>
      <ul className={css.statList}>
        <li className="statItem">Good:{good}</li>
        <li className="statItem">Neutral:{neutral}</li>
        <li className="statItem">Bad: {bad}</li>
        <li className="statItem">Total:{total}</li>
        <li className="statItem">Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};
