import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList> render', () => {
  it('CourseList component renders successfully without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Render 5 times CourseListRow child component', () => {
    const wrapper = shallow(<CourseList />);
    const rowLists = wrapper.find(CourseListRow);
    expect(rowLists.length).toBe(5);
  });
});
