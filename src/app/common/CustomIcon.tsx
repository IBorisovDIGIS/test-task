import { Icon, makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles({
  imageIcon: {
    height: 24,
    width: 24,
  },
  iconRoot: {
    textAlign: 'center',
    height: '100%',
  },
});

interface ICustomIcon {
    icon: string;
    iconClasses?: string;
    alt?: string
}

const CustomIcon: React.FC<ICustomIcon> = ({ icon, iconClasses, ...props }: ICustomIcon) => {
  const classes = useStyles();

  return (
    <Icon classes={{ root: classes.iconRoot }}>
      <img
        className={clsx(classes.imageIcon, iconClasses)}
        src={icon}
        alt="alt"
        {...props}
      />
    </Icon>
  );
};

export default CustomIcon;

CustomIcon.defaultProps = {
  iconClasses: '',
  alt: '',
};
