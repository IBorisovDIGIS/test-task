import React from 'react';
import {
  Grid, makeStyles, Typography,
} from '@material-ui/core';
import { gray, mainText } from '../../../constants/colors';

const useStyles = makeStyles({
  label: {
    flexGrow: 1,
    fontSize: 13,
    color: gray,
  },
  title: {
    flexGrow: 1,
    fontSize: 19,
    color: mainText,

  },
});

interface IHeader {
    label: string;
    title: string;
}

const HeaderTextItem: React.FC<IHeader> = ({ label, title }: IHeader) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Typography noWrap className={classes.label}>
        {label}
      </Typography>
      <Typography noWrap className={classes.title}>
        {title}
      </Typography>
    </Grid>
  );
};

export default HeaderTextItem;
