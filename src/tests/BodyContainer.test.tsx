// CustomIcon.tsx test
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Container, Grid, Typography } from '@material-ui/core';
import toJson from 'enzyme-to-json';
import BodyContainer  from '../app/bodyContainer/BodyContainer';

configure({ adapter: new Adapter() });

describe('Body Container should render correctly', () => {
  const TestChild = <div>Test</div>;

  it('Should renders correctly', () => {
    const container = shallow(
      <BodyContainer title="Title">
        {TestChild}
      </BodyContainer>,
    );

    expect(toJson(container)).toMatchSnapshot();
  });

  it('Should render components and display title correctly', () => {
    const container = shallow(
      <BodyContainer title="Title">
        {TestChild}
      </BodyContainer>,
    );

    expect(Container).toBeDefined();
    expect(Grid).toBeDefined();
    expect(Typography).toBeDefined();
    const title = container.find(Typography);
    expect(title.text()).toEqual('Title');
  });

  it('Should render children correctly', () => {
    const container = shallow(
      <BodyContainer title="Title">
        {TestChild}
      </BodyContainer>,
    );
    const { children } = container.find('#body-wrapper').props();
    expect(children).toEqual(TestChild);
  });
});
