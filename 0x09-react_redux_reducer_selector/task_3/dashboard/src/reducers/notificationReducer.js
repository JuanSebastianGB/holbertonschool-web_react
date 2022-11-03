import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: '',
};
export const notificationReducer = (state, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return action.payload.map((notification) => ({
        ...notification,
        isRead: false,
      }));
    case MARK_AS_READ:
      return state.notification.map((notification) =>
        notification.id === action.payload
          ? { ...notification, isRead: true }
          : { ...notification }
      );
    case SET_TYPE_FILTER:
      return { ...state, filter: action.payload };

    default:
      return initialState;
  }
};
