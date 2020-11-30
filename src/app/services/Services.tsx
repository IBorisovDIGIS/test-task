import React, { useCallback, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import SearchFilter from './components/SearchFilter';
import ServiceItem from './components/ServiceItem';
import { IBounce } from '../../interfaces';

interface IServices {
    bonuses: IBounce[]
}

const Services: React.FC<IServices> = ({ bonuses }: IServices) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [filteredBounces, setFilteredBounces] = React.useState(bonuses);

  const handleFilterBounces = useCallback(() => {
    setFilteredBounces(() => bonuses.filter(
      ({ title }) => title.toLowerCase().includes(searchValue.toLowerCase()),
    ));
  }, [setFilteredBounces, searchValue]);

  useEffect(() => {
    handleFilterBounces();
  }, [searchValue, bonuses]);

  const handleChangeSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, [searchValue]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <SearchFilter
          handleChangeSearch={handleChangeSearch}
          searchValue={searchValue}
        />
      </Grid>
      <Grid container item xs={12}>
        {filteredBounces.map((bounce) => <ServiceItem {...bounce} key={bounce.title} />)}
      </Grid>
    </Grid>
  );
};

export default Services;
