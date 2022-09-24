import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

let wrapper;
describe('<Notifications/> render', () => {
  beforeEach(()=>{
    wrapper = shallow(<Notifications />);
  })
  it('test that Notifications renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that Notifications renders three list items', () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    const liElements = wrapper.find(NotificationItem);
    expect(liElements.length).toEqual(3);
  });
  it('verify that Notifications renders the text Here is the list of notifications', () => {
    wrapper = shallow(<Notifications  displayDrawer={true}/>);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
  it('check that the menu item is being displayed when displayDrawer is false',()=>{
    expect(
      wrapper.containsMatchingElement(
        <div className="menuItem">Your notifications</div>
      )
    ).toBe(true);
  });
  it(
    'check that the div.Notifications is not being displayed when displayDrawer is false',()=>{
      expect(wrapper.find('div.Notifications').length).toBe(0);
    }
  );
});
