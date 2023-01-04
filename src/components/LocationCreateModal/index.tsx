import ClickAwayListener from 'react-click-away-listener';
import { LocationModalProps } from './types';

import styles from './styles.module.scss';

export default function LocationCreateModal({
  onClose,
  open,
}: LocationModalProps) {
  return (
    <>
      {open && (
        <div className={styles.modalBackground}>
          <ClickAwayListener onClickAway={onClose}>
            <div className={styles.modal}>
              <h2>Create the Location</h2>
              <div className={styles.inputContainer}>
                <label>
                  First Name
                  <input type="text" />
                </label>
                <label>
                  Last Name
                  <input type="text" />
                </label>
                <label>
                  Location
                  <input type="text" />
                </label>
              </div>
              <button className={styles.addLocation}>Add Location</button>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </>
  );
}
