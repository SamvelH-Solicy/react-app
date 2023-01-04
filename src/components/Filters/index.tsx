import { useState } from 'react';

import styles from './styles.module.scss';

const filters = [
  { name: 'Filter 1', disabled: false },
  { name: 'Filter 2', disabled: false },
  { name: 'Filter 3', disabled: false },
  { name: 'Filter 4', disabled: false },
];

export default function Filters() {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  return (
    <div className={styles.filtersSection}>
      {selectedFilters.map((filter) => (
        <button key={filter.name} disabled={filter.disabled}>
          {filter.name}
        </button>
      ))}
    </div>
  );
}
