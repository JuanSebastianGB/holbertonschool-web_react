import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

let wrapper;

describe('<App /> render', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders App component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that App has 1 Header child component', () => {
    const headerComponent = wrapper.find(Header);
    expect(headerComponent.exists()).toBe(true);
    expect(headerComponent.length).toBe(1);
  });
  it('verify that App has 1 Login child component', () => {
    const loginComponent = wrapper.find(Login);
    expect(loginComponent.exists()).toBe(true);
    expect(loginComponent.length).toBe(1);
  });
  it('verify that App has 1 Footer child component', () => {
    const footerComponent = wrapper.find(Footer);
    expect(footerComponent.exists()).toBe(true);
    expect(footerComponent.length).toBe(1);
  });
  it('verify that App has 1 Notifications child component', () => {
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.exists()).toBe(true);
    expect(notificationsComponent.length).toBe(1);
  });
});
