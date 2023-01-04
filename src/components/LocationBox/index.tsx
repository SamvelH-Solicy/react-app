import styles from './styles.module.scss';

export default function LocationBox() {
  return (
    <div className={styles.locationBox}>
      <div className={styles.locationInfoTop}>
        <h6 className={styles.locationText}>FirstName LastName</h6>
        <div className={styles.locationStatus}>
          <h3 className={styles.locationText}>Active</h3>
        </div>
      </div>
      <h3 className={styles.locationText}>4551075.2787174</h3>
      <div className={styles.locationInfoBottom}>
        <h4 className={styles.locationText}>Dec-30 02:15 PM </h4>
        <h5 className={styles.locationText}>0h</h5>
      </div>
    </div>
  );
}
