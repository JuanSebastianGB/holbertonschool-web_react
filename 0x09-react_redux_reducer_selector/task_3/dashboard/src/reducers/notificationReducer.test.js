import { notificationReducer } from './notificationReducer';

describe('notifications reducer', () => {
  const initialState = {
    notifications: [],
    filter: '',
  };
  it('default state returns the initial data', () => {
    expect(notificationReducer(undefined, { type: 'ANY_TYPE' })).toEqual(
      initialState
    );
  });
});
