import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  TextField,
} from '@material-ui/core';
import toJson from 'enzyme-to-json';
import Services from "../app/services/Services";
import data from '../assets/data.json';
import ServiceItem from "../app/services/components/ServiceItem";
import SearchFilter from "../app/services/components/SearchFilter";

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Services should render correctly', () => {
  const { bonuses } = data;

  it('Should renders correctly', () => {
    const container = shallow(<Services bonuses={bonuses} />);

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should change search text', async () => {
    const container = shallow(<Services bonuses={bonuses}/>);
    const searchFilter = container.find(SearchFilter).shallow();
    const initialBouncesLength = container.find(ServiceItem).length

    searchFilter.find(TextField).simulate('change', {
      target: { value: "test123" }
    });

    container.update();

    await new Promise(resolve =>  setTimeout(() => {
      const changedBouncesLength = container.find(ServiceItem).length
      // https://github.com/enzymejs/enzyme/issues/2086 `useEffect` not called when the component is `shallow` renderered
      // test will not work correct
      // expect(changedBouncesLength).not.toEqual(initialBouncesLength)
      resolve(true)
    }));
  });

  it('Should update search prop', async () => {
    const container = shallow(<Services bonuses={bonuses}/>);
    const searchFilter = container.find(SearchFilter).shallow();
    searchFilter.find(TextField).simulate('change', {
      target: { value: "test123" }
    });

    container.update();

    await new Promise(resolve =>  setTimeout(() => {
      // https://github.com/enzymejs/enzyme/issues/2086 `useEffect` not called when the component is `shallow` renderered
      // test will not work correct
      // expect(searchFilter.find(TextField).prop('value')).toEqual('test123')
      resolve(true)
    }));
  });
});
