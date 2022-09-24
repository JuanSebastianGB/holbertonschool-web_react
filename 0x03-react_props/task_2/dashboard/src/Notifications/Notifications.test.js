import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications/> render', () => {
  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const liElements = wrapper.find(NotificationItem);
    expect(liElements.length).toEqual(3);
  });
  it('verify that Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
