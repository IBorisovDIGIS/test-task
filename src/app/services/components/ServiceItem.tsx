import React, { useState } from 'react';
import {
  Button, Grid, InputAdornment, makeStyles, Paper, TextField, Tooltip, Typography,
} from '@material-ui/core';
import copy from 'clipboard-copy';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { black, blue, white } from '../../../constants/colors';
import CustomIcon from '../../common/CustomIcon';
import CopyIcon from '../../../assets/icons/copy.svg';
import { IBounce } from '../../../interfaces';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '26px 32px',
    marginTop: 24,
  },
  containerActivated: {
    backgroundColor: black,
  },
  button: {
    padding: '8px 10px',
  },
  title: {
    fontWeight: 300,
    fontSize: 29,
    color: '#000',
  },
  subtitle: {
    fontSize: 15,
    color: '#7D7D7D',
  },
  textActivated: {
    color: white,
  },
  bonusButton: {
    height: 48,
    backgroundColor: blue,
    color: white,
  },
  bonusButtonActivated: {
    backgroundColor: white,
    color: blue,
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 10px',
  },
  copyIconWrapper: {
    height: '100%',
    width: 25,
  },
  copyIcon: {
    cursor: 'pointer',
  },
}));

const ServiceItem: React.FC<IBounce> = ({ description, promocode, title }:IBounce) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [isCopied, setIsCopied] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const toggleBonus = () => setIsActivated((prevIsActivated) => !prevIsActivated);

  const handleOnCopy = async () => {
    await copy(promocode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const renderCopyButton = () => (
    <Tooltip
      open={isCopied}
      title={promocode}
      placement="top"
      arrow
    >
      <InputAdornment
        position="end"
        onClick={handleOnCopy}
        className={classes.copyIconWrapper}
      >
        <CustomIcon
          icon={CopyIcon}
          iconClasses={classes.copyIcon}
        />
      </InputAdornment>
    </Tooltip>
  );

  return (
    <Grid item xs={12}>
      <Paper classes={{ root: clsx(classes.container, isActivated && classes.containerActivated) }}>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={6}>
            <Typography
              classes={{ root: clsx(classes.title, isActivated && classes.textActivated) }}
            >
              {title}
            </Typography>
            <Typography
              classes={{ root: clsx(classes.subtitle, isActivated && classes.textActivated) }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={3} container alignItems="flex-end">
            <TextField
              fullWidth
              label={t('promocode').toUpperCase()}
              disabled
              value={promocode}
              InputProps={{
                disableUnderline: true,
                classes: { root: classes.input },
                endAdornment: renderCopyButton(),
              }}
            />
          </Grid>
          <Grid item xs={3} container alignItems="flex-end">
            <Button
              variant="contained"
              fullWidth
              classes={{
                root: clsx(classes.bonusButton, isActivated && classes.bonusButtonActivated),
              }}
              onClick={toggleBonus}
            >
              {isActivated ? t('deActivateBonus') : t('activateBonus')}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ServiceItem;
