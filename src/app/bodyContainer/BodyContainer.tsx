import React, { ReactElement } from 'react';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    fontSize: 39,
    fontWeight: 300,
  },
}));

interface IBody {
    children: ReactElement;
    title: string;
}

const BodyContainer: React.FC<IBody> = ({ children, title }:IBody) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h3" className={classes.title}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} id="body-wrapper">
            {children}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default BodyContainer;
