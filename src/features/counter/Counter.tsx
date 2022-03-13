import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
