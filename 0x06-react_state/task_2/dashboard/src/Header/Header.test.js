import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from '../App/AppContext';
const value = { user, logOut };

let wrapper, wrapperMount;
describe('<Header/> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    wrapperMount = mount(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('render Header component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that Header component has a img tag', () => {
    const imgTag = wrapperMount.find('img');
    expect(imgTag.exists()).toBe(true);
  });
  it('verify that header component has a h1 tag', () => {
    const h1Tag = wrapperMount.find('h1');
    expect(h1Tag.exists()).toBe(true);
  });
});
