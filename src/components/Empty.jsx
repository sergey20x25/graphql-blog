import React from 'react';
import { Link } from 'react-router-dom';

const classes = {
  link: 'text-blue-500 underline hover:text-blue-700',
};

export const Empty = () => (
  <div className="text-center">
    {'No posts yet. '}
    <Link to="/new" className={classes.link}>
      Create one?
    </Link>
  </div>
);
