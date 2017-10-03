import { connect } from 'react-redux';
import { Search } from '../components';
import * as userSearch from '../reducers/userSearch';
import { Users } from '../services';

const mapStateToProps = ({ userSearch: { query, results } }) => ({
  query,
  results,
});

const mapDispatchToProps = (dispatch) => ({
  onQueryChange: (query) => {
    dispatch(userSearch.updateQuery(query));
    dispatch(userSearch.updateResults(null));
    Users
      .search(query)
      .then(res => dispatch(userSearch.updateResults(res)));
  },
  onUserClick: user => console.log('Navigate to user', user),
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
