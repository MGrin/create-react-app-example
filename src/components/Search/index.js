import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Paper, RefreshIndicator } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import List from '../List';
import UserLine from '../UserLine';
import SubHeader from '../SubHeader';
import { getValueFromReactEvent } from '../../utils';

import './styles.css';

const renderUser = user => <UserLine user={user} />;

// width is a hack around the loading component props
// definetly shoud write our own loader

const renderLoader = width => () => (
  <div className="search search-loader">
    <RefreshIndicator
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
      left={width / 2}
      top={24}
      
      status="loading" />
  </div>
);

const getNodeWidth = node => node ? ReactDOM.findDOMNode(node).getBoundingClientRect().width : null;

export default class Search extends PureComponent {
  static propTypes = {
    query: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
    onQueryChange: PropTypes.func.isRequired,
    onUserClick: PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      node: null, // used for loder hack
    };
  }

  componentDidMount() {
    this.props.onQueryChange('');
  }

  render() {
    const { query, results, onQueryChange, onUserClick } = this.props;

    return (
      <div>
        <SubHeader title="All Users"/>
        <Paper className="search search-wrapper" ref={node => this.setState({ node })}>
          <div className="search search-input-wraper">
            <ActionSearch className="search search-input-icon" /> 
            <input
              type="text"
              placeholder="search"
              value={query}
              onChange={getValueFromReactEvent(onQueryChange)}/>
          </div>
          <List
            items={results}
            renderItem={renderUser}
            renderLoader={renderLoader(getNodeWidth(this.state.node))}
            onItemClick={onUserClick} />
        </Paper>
      </div>
    );
  }
}
