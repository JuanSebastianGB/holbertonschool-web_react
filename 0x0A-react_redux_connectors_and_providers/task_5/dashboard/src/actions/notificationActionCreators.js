import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_LOADING_STATE,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

export const markAsRead = (index) => ({ type: MARK_AS_READ, index });
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter: NotificationTypeFilters[filter],
});

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (index) =>
  dispatch(setNotificationFilter(index));

export const setLoadingState = (loadState) => ({
  type: SET_LOADING_STATE,
  loadState,
});

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const fetchNotifications = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await fetch('/notifications.json');
    const jsonData = await response.json();
    dispatch(setNotifications(jsonData));
  } catch (error) {
    console.log({ error });
  } finally {
    dispatch(setLoadingState(false));
  }
};
