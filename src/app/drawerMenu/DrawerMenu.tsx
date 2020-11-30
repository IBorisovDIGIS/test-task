import React from 'react';
import clsx from 'clsx';
import {
  Divider, Drawer, IconButton, List, makeStyles,
} from '@material-ui/core';
import logo from '../../assets/icons/logo.svg';
import { drawerWidth, menuItems } from '../../constants';
import MenuItem from './components/MenuItem';
import { black } from '../../constants/colors';
import CustomIcon from '../common/CustomIcon';

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: black,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  imageIcon: {
    width: 27,
    height: 40,
  },
  iconRoot: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
}));

interface IDrawerMenu {
    open: boolean;
    handleDrawerToggle: () => void;
}

const DrawerMenu: React.FC<IDrawerMenu> = ({ open, handleDrawerToggle }: IDrawerMenu) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerToggle} id="menu-button">
          <CustomIcon icon={logo} iconClasses={classes.imageIcon} alt="logo" />
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => <MenuItem {...item} key={item.label} />)}
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
