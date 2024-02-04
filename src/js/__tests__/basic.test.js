// import sum from '../basic';

// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });
import getHPstatus from '../basic';

test('result = healthy', () => {
  const result = getHPstatus({ name: 'Маг', health: 50 });
  expect(result).toBe('healthy');
});

test('result = wounded', () => {
  const result = getHPstatus({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('result = critical', () => {
  const result = getHPstatus({ name: 'Маг', health: 0 });
  expect(result).toBe('critical');
});