import { useState } from 'react';
import SearchIcon from '../../images/search-icon.png';
import { SearchInputProps } from './types';

import styles from './styles.module.scss';

export default function SearchInput({ onChange }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const onInputChange = (value: string) => {
    onChange(value);
    setSearchValue(value);
  };

  return (
    <div className={styles.searchInput}>
      <img src={SearchIcon} className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}
