import React from 'react';
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import './utils/language';

import { useTranslation } from 'react-i18next';
import Header from './app/header/Header';
import DrawerMenu from './app/drawerMenu/DrawerMenu';
import Services from './app/services/Services';
import BodyContainer from './app/bodyContainer/BodyContainer';
import data from './assets/data.json';

const theme = createMuiTheme({
  typography: {
    fontFamily:
        '"Rubik", sans-serif',
  },
});

const App:React.FC = () => {
  const { header, bonuses } = data;
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header open={open} {...header} />
      <DrawerMenu open={open} handleDrawerToggle={handleDrawerToggle} />
      <BodyContainer title={t('services')}>
        <Services bonuses={bonuses} />
      </BodyContainer>
    </MuiThemeProvider>
  );
};

export default App;
