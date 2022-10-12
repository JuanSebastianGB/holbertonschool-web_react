import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { AppContext, user, logOut } from '../App/AppContext';

let wrapper;
describe('<Footer/> render', () => {
  beforeEach(() => {
    wrapper = mount(<Footer />);
  });
  it('render Footer component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Footer component must have Copyright text', () => {
    expect(wrapper.text()).toContain('Copyright');
  });
  it('verify that the link is not displayed when the user is logged out within the context', () => {
    const value = { user: { ...user, isLoggedIn: false }, logOut };
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });
  it('verify that the link is displayed when the user is logged in within the context', () => {
    const value = { user: { ...user, isLoggedIn: true }, logOut };
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
