import React from 'react';
import { Avatar } from 'material-ui';

import './styles.css';

export default ({ user }) => (
  <div>
    <div className="userline userline-wrapper">
      <Avatar size={64} className="userline userline-avatar" src={user.picture.thumbnail} />
      <div className="userline userline-contactinfo">
        <div className="userline userline-name">{`${user.name.first} ${user.name.last}`}</div>
        <div className="userline userline-email">{user.email}</div>
      </div>
    </div>
    <div className="userline userline-borderline" />
  </div>
);
