import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DrawerMenu from '../app/drawerMenu/DrawerMenu';

configure({ adapter: new Adapter() });

describe('Drawer menu should render correctly', () => {
  const handleDrawerToggle = jest.fn();

  it('Should renders correctly', () => {
    const container = shallow(<DrawerMenu open={false} handleDrawerToggle={handleDrawerToggle} />);

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should open menu correctly', () => {
    const closedMenu = shallow(<DrawerMenu open={false} handleDrawerToggle={handleDrawerToggle} />);
    const openMenu = shallow(<DrawerMenu open={true} handleDrawerToggle={handleDrawerToggle} />);
    closedMenu.setProps({ open: true });
    expect(closedMenu).toEqual(openMenu);
  });

  it('Should call handleDrawerToggle on logo button press', () => {
    const container = shallow(<DrawerMenu open={false} handleDrawerToggle={handleDrawerToggle} />);

    container.find('#menu-button').simulate('click');
    expect(handleDrawerToggle).toHaveBeenCalledTimes(1);
  });
});

