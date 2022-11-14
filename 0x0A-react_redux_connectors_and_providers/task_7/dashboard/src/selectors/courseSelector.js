export const courseSelector = (state) => {
  const courses = state.get('courses');
  return courses;
};
