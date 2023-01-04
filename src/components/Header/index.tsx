import { useState } from 'react';
import RefreshIcon from '../../images/refresh-icon.png';
import LocationCreateModal from '../LocationCreateModal';

import styles from './styles.module.scss';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const onCloseModal = () => {
    setOpen(false);
  };

  const onOpenModal = () => {
    setOpen(true);
  };

  return (
    <div className={styles.header}>
      <LocationCreateModal open={open} onClose={onCloseModal} />
      <button className={styles.refreshButton}>
        <img src={RefreshIcon} className={styles.refreshIcon} />
      </button>
      <h2 className={styles.title}>Locations</h2>
      <div className={styles.addLocationButton} onClick={onOpenModal}>
        <span>+</span>
      </div>
    </div>
  );
}
