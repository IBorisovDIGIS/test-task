import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import { white } from '../../../constants/colors';
import CustomIcon from '../../common/CustomIcon';

const useStyles = makeStyles({
  itemContainer: {
    padding: 24,
  },
  imageIcon: {
    height: 24,
    width: 24,
  },
  iconRoot: {
    textAlign: 'center',
    height: '100%',
  },
  text: {
    color: white,
  },
});

interface IMenuItem {
    icon: string;
    label: string;
}

const MenuItem: React.FC<IMenuItem> = ({ icon, label }: IMenuItem) => {
  const classes = useStyles();

  return (
    <ListItem button classes={{ root: classes.itemContainer }}>
      <ListItemIcon>
        <CustomIcon
          icon={icon}
          iconClasses={classes.imageIcon}
          alt={label}
        />
      </ListItemIcon>
      <ListItemText primary={label} classes={{ root: classes.text }} />
    </ListItem>
  );
};

export default MenuItem;
