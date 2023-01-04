import LocationBox from '../LocationBox';

import styles from './styles.module.scss';

export default function Locations() {
  return (
    <div className={styles.locations}>
      {[1, 2, 3, 4, 5].map((item) => (
        <LocationBox key={item} />
      ))}
    </div>
  );
}
