import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  Select,
} from '@material-ui/core';
import toJson from 'enzyme-to-json';
import LanguageSelect from "../app/header/components/LanguageSelect";

configure({ adapter: new Adapter() });

describe('Language select should render correctly', () => {
  it('Should renders correctly', () => {
    const container = shallow(<LanguageSelect />);

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should render elements correctly', () => {
    expect(Select).toBeDefined();
  });

  it('Should change language', () => {
    const container = shallow(<LanguageSelect/>);

    container.find(Select).simulate('onChange', {
      target: { value: "ru" }
    });

    setTimeout(() => expect(container.find(Select).prop("value")).toBe('ru'))
  });

});
