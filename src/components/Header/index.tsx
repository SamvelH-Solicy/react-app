import RefreshIcon from '../../images/refresh-icon.png';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <button className={styles.refreshButton}>
        <img src={RefreshIcon} className={styles.refreshIcon} />
      </button>
      <h2 className={styles.title}>Locations</h2>
      <div className={styles.addLocationButton}>
        <span>+</span>
      </div>
    </div>
  );
}
