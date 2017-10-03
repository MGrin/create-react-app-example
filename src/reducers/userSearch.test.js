import userSearchReducer, { types, updateQuery, updateResults } from './userSearch';

describe('updateQuery', () => {
  it('should generate an action of given shape', () =>{
    const action = updateQuery('test query');
    expect(action).toHaveProperty('query');
    expect(action.query).toBe('test query');
  });
});

describe('updateResults', () => {
  it('should generate an action of given shape', () =>{
    const action = updateResults([1, 2, 3]);
    expect(action).toHaveProperty('results');
    expect(action.results).toEqual([1, 2, 3]);
  });
});

describe('userSearchReducer', () => {
  it('should return unchanged state for unknown actions', () => {
    const initialState = userSearchReducer(null, { type: 'aaa' });
    const nextState = userSearchReducer(initialState, { type: 'bbb' });

    expect(nextState).toEqual(initialState);
  });

  it('should update search query', () => {
    const initialState = userSearchReducer(null, { type: 'aaa' });
    const nextState = userSearchReducer(initialState, updateQuery('new query'));

    expect(nextState).not.toEqual(initialState);
    expect(nextState.query).toBe('new query');
  });

  it('should update search results', () => {
    const initialState = userSearchReducer(null, { type: 'aaa' });
    const nextState = userSearchReducer(initialState, updateResults([1, 2, 3]));

    expect(nextState).not.toEqual(initialState);
    expect(nextState.results).toEqual([1, 2, 3]);
  });
});
