import React, { ChangeEvent } from 'react';
import {
  Button, Grid, makeStyles, TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    flex: 1,
  },
  inputLabel: {
    position: 'relative',
    top: -25,
    padding: 0,
    margin: 0,
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 10px',
  },
  button: {
    padding: '8px 10px',
  },
}));

interface ISearchFilter {
    handleChangeSearch: (value: string) => void;
    searchValue: string;
}

const SearchFilter: React.FC<ISearchFilter> = ({
  handleChangeSearch,
  searchValue,
}: ISearchFilter) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    handleChangeSearch(event.target.value);
  };

  const handleResetFilter = () => handleChangeSearch('');

  return (
    <Grid container spacing={1}>
      <Grid item xs={4} container alignItems="stretch">
        <TextField
          fullWidth
          label={t('filter')}
          InputProps={{ disableUnderline: true, classes: { root: classes.input } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={searchValue}
          onChange={handleChangeFilter}
        />
      </Grid>
      <Grid item xs={4} container alignItems="flex-end">
        <Button
          variant="outlined"
          classes={{ root: classes.button }}
          onClick={handleResetFilter}
        >
          {t('reset')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchFilter;
