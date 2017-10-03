import {
  isArray,
  getValueFromReactEvent,
} from './index';

describe('isArray', () => {
  it('should return false for not an array', () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray("")).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
  });

  it('should return true for an array', () => {
    expect([]).toBeTruthy();
    expect([1, 2, 3]).toBeTruthy();
  });
});

describe('getValueFromReactEvent', () => {
  it('should extract value', () => {
    getValueFromReactEvent(val => expect(val).toBe('123'))({ target: { value: '123' } })
  });
})
