import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import SubHeader from '../SubHeader';
import './styles.css';

const Menu = ({ title, elements, active }) => (
  <div className="menu menu-wrapper">
    <SubHeader title={title} />
    <List className="menu menu-list">
      {elements.map((element, idx) => (
        <ListItem
          key={`menu_${title}_element_${element.title}`}
          className="menu menu-element"
          primaryText={element.title}
          leftIcon={element.icon} />
      ))}
    </List>
  </div>
);

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  })),
};

Menu.defaultProps = {
  elements: [],
};

export default Menu;