import { useState } from 'react';
import Filters from '../Filters';
import Header from '../Header';
import Locations from '../Locations';
import SearchInput from '../SearchInput';

import styles from './styles.module.scss';

export default function Home() {
  const [locations, setLocations] = useState<any>([]);

  const onInputChange = (value: string) => {
    const newLocations = locations.filter((item: any) => item.includes(value));
    setLocations(newLocations);
  };

  return (
    <div className={styles.home}>
      <Header />
      <SearchInput onChange={onInputChange} />
      <Filters />
      <Locations />
    </div>
  );
}
