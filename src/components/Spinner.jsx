import { FaSpinner } from 'react-icons/fa';
import styles from './Spinner.module.css'

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinner} size={60} />
    </div>
  );
}
