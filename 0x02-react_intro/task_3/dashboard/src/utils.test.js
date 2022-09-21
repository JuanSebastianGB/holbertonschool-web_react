import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('Use fullYear function must return the actual year', () => {
  const actualDate = new Date().getFullYear();
  expect(actualDate).toBe(getFullYear());
});

test('Returns Holberton School if isIndex is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('Returns Holberton School main dashboard if isIndex is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('Must return <strong>Urgent requirement</strong> - complete by EOD', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
