import { getMonth } from './index.js';
import { getPercents } from './index.js'; 
import { repeatWord } from './index.js';

describe('function test that returns months', () => {
  it(('5 is May'), () => {
    expect(getMonth(5)).toBe('Май');
  }),
  it(('at 0 it turns out error'), () => {
    expect(getMonth(0)).toBe('Ошибка!');
  }),
  it(('at 13 it turns out error'), () => {
    expect(getMonth(13)).toBe('Ошибка!');
  })
});

test(('percentage of a numbe'), () => {
  const result = getPercents(30, 200)
  expect(result).toBe(60);
})

test(('repeats a certain number of times'), () => {
  expect(repeatWord('слово', 3)).toBe('слово1, слово2, слово3, ');
})

