import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { isArray } from '../../utils';

const List = ({ items, onItemClick, renderItem, renderLoader }) => (
  <div className="list list-wrapper">
    {!isArray(items) && renderLoader()}
    {isArray(items) && items.map((item, idx) => (
      <div className="list list-item" onClick={() => onItemClick(item)} key={`item_${idx}`}>
        {renderItem(item)}
      </div>
    ))}
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func,

  renderItem: PropTypes.func.isRequired,
  renderLoader: PropTypes.func.isRequired,
};

List.defaultProps = {
  items: null,
  onItemClick: () => {},
};

export default List;
