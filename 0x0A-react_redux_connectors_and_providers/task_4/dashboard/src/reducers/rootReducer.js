import { courseReducer } from './courseReducer';
import { notificationReducer } from './notificationReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};
