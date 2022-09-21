import { shallow } from 'enzyme';
import App from './App';

describe('<App /> render', () => {
  it('renders App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    const appHeader = wrapper.find('div.App-header');
    expect(appHeader.exists()).toBe(true);
  });
  it('verify that App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    const appBody = wrapper.find('div.App-body');
    expect(appBody.exists()).toBe(true);
  });
  it('verify that App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const appFooter = wrapper.find('div.App-footer');
    expect(appFooter.exists()).toBe(true);
  });
});
