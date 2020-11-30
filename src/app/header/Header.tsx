import React from 'react';
import clsx from 'clsx';
import {
  AppBar, Grid, makeStyles, Toolbar,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import HeaderTextItem from './components/HeaderTextItem';
import { white } from '../../constants/colors';
import LanguageSelect from './components/LanguageSelect';
import { drawerWidth } from '../../constants';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
    background: white,
    shadow: 'none',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  appBar: {
    marginLeft: theme.spacing(9),
    width: `calc(100% - ${theme.spacing(9)}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },

}));

interface IHeader {
    open: boolean;
    balance: number,
    next_payout: number,
    currency: string;
}

const Header: React.FC<IHeader> = ({
  open, balance, next_payout, currency,
}: IHeader) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const displayCurrency = currency === 'usd' ? '$' : '';

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={2}>
          <HeaderTextItem label={t('balance')} title={`${balance.toLocaleString()} ${displayCurrency}`} />
          <HeaderTextItem label={t('payout')} title={`${next_payout.toLocaleString()} ${displayCurrency}`} />
        </Grid>
        <LanguageSelect />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
