import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Container, Grid, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import toJson from 'enzyme-to-json';
import MenuItem from '../app/drawerMenu/components/MenuItem';
import {menuItems} from "../constants";
import CustomIcon from "../app/common/CustomIcon";

const menuItem = menuItems[0];

configure({ adapter: new Adapter() });

describe('Menu item should render correctly', () => {
  it('Should renders correctly', () => {
    const container = shallow(<MenuItem label={menuItem.label} icon={menuItem.icon} />);

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should display icon correctly', () => {
    const item = shallow(<MenuItem label={menuItem.label} icon={menuItem.icon} />);
    expect(ListItem).toBeDefined();
    expect(ListItemIcon).toBeDefined();
    expect(CustomIcon).toBeDefined();

    const icon = item.find(CustomIcon).shallow().find('img');

    expect(icon.prop('src')).toEqual(menuItem.icon);
    expect(icon.prop('alt')).toEqual(menuItem.label);
  });

  it('Should display label correctly', () => {
    const item = shallow(<MenuItem label={menuItem.label} icon={menuItem.icon} />);
    expect(ListItem).toBeDefined();
    expect(ListItemText).toBeDefined();

    const text = item.find(ListItemText).prop('primary');
    expect(text).toEqual(menuItem.label);
  });

});
