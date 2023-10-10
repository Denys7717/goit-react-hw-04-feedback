import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <div className={css.buttons}>
        {options.map(btnItem => {
          return (
            <button
              key={btnItem}
              type="button"
              className={css.btn}
              name={btnItem}
              onClick={onLeaveFeedback}
            >
              {btnItem}
            </button>
          );
        })}
      </div>
    </>
  );
};
