import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AppBar, Grid, Toolbar, Typography} from '@material-ui/core';
import toJson from 'enzyme-to-json';
import Header from '../app/header/Header';
import HeaderTextItem from "../app/header/components/HeaderTextItem";
import LanguageSelect from "../app/header/components/LanguageSelect";

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Header should render correctly', () => {
  const headerProps = { open: false, balance: 0, next_payout: 1, currency: 'usd' };

  it('Should renders correctly', () => {
    const container = shallow(<Header {...headerProps} />);

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should render elements correctly', () => {
    expect(AppBar).toBeDefined();
    expect(Toolbar).toBeDefined();
    expect(Grid).toBeDefined();
    expect(HeaderTextItem).toBeDefined();
    expect(LanguageSelect).toBeDefined();

  });

  it('Should render balance correctly', () => {
    const container = shallow(<Header {...headerProps} />);

    const balance = container.find(HeaderTextItem).first().shallow()
    const title = balance.find(Typography).first().text();
    const description = balance.find(Typography).last().text();
    expect(title).toEqual('balance')
    expect(description).toContain(headerProps.balance)
  });

  it('Should render payout correctly', () => {
    const container = shallow(<Header {...headerProps} />);

    const payout = container.find(HeaderTextItem).last().shallow()
    const title = payout.find(Typography).first().text();
    const description = payout.find(Typography).last().text();
    expect(title).toEqual('payout')

    expect(description).toContain(headerProps.next_payout)
  });

});
