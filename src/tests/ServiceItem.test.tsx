import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  Button, InputAdornment,
  TextField, Typography,
} from '@material-ui/core';
import toJson from 'enzyme-to-json';
import ServiceItem from "../app/services/components/ServiceItem";
import data from '../assets/data.json';

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));


describe('Search filter should render correctly', () => {
  const { bonuses } = data;
  const serviceItemData = bonuses[0];

  it('Should renders correctly', () => {
    const container = shallow(<ServiceItem {...serviceItemData} />);

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should render values correctly', () => {
    const container = shallow(<ServiceItem {...serviceItemData} />);
    const title = container.find(Typography).first().text()
    const description = container.find(Typography).at(1).text()
    const promocode = container.find(TextField).prop('value')
    expect(title).toEqual(serviceItemData.title);
    expect(description).toEqual(serviceItemData.description);
    expect(promocode).toEqual(serviceItemData.promocode);
  });

  it('Should change state by clicking on button', async () => {
    const container = shallow(<ServiceItem {...serviceItemData} />);

    expect(container.find(Button).text()).toEqual('activateBonus')
    container.find(Button).simulate('click');


    await new Promise(resolve =>  setTimeout(() => {
      expect(container.find(Button).text()).toEqual('deActivateBonus')
      resolve(true)
    }));
  });
});
