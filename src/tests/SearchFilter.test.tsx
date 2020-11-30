import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  Button,
  TextField,
} from '@material-ui/core';
import toJson from 'enzyme-to-json';
import SearchFilter from "../app/services/components/SearchFilter";

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Search filter should render correctly', () => {
  it('Should renders correctly', () => {
    const handleChangeSearch = jest.fn();

    const container = shallow(<SearchFilter handleChangeSearch={handleChangeSearch} searchValue="" />);

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should change search text', async () => {
    const handleChangeSearch = jest.fn();
    const container = shallow(<SearchFilter handleChangeSearch={handleChangeSearch} searchValue="" />);
    container.find(TextField).simulate('change', {
      target: { value: "test123" }
    });
    expect(handleChangeSearch).toHaveBeenCalledWith('test123')
  });

  it('Should render search value correctly', async () => {
    const handleChangeSearch = jest.fn();
    const container = shallow(<SearchFilter handleChangeSearch={handleChangeSearch} searchValue="test" />);
    expect(container.find(TextField).prop('value')).toEqual('test')
  });

  it('Should reset value on by clicking on reset button', async () => {
    const handleChangeSearch = jest.fn();
    const container = shallow(<SearchFilter handleChangeSearch={handleChangeSearch} searchValue="" />);
    container.find(Button).simulate('click');
    expect(handleChangeSearch).toHaveBeenCalledWith('')
  });
});
