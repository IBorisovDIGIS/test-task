// CustomIcon.tsx test
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import CustomIcon from '../app/common/CustomIcon';
import CopyIcon from '../assets/icons/copy.svg';

configure({ adapter: new Adapter() });

describe('Custom Icon should render correctly', () => {
  it('Should renders correctly', () => {
    const icon = shallow(<CustomIcon icon={CopyIcon} alt="icon" iconClasses="testClass" />);

    expect(toJson(icon)).toMatchSnapshot();
  });

  it('Should pass props correctly', () => {
    const icon = shallow(<CustomIcon icon={CopyIcon} alt="icon" iconClasses="testClass" />);

    expect(icon.find('img').prop('src')).toEqual(CopyIcon);
    expect(icon.find('img').prop('alt')).toEqual('icon');
    expect(icon.find('img').prop('className')).toContain('testClass');
  });
});
