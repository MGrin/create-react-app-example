export const types = {
  UPDATE_QUERY: 'userSearch/updateQuery',
  UPDATE_RESULTS: 'userSearch/updateResults',
};

export const updateQuery = query => ({
  type: types.UPDATE_QUERY,
  query,
});

export const updateResults = results => ({
  type: types.UPDATE_RESULTS,
  results,
})

const initialState = {
  query: '',
  results: null,
};

export default (state = initialState, { type, query, results }) => {
  switch (type) {
    case types.UPDATE_QUERY: return {
      ...state,
      query,
    }

    case types.UPDATE_RESULTS: return {
      ...state,
      results,
    }

    default: return state;
  }
};
