import React from 'react';
import { Link } from 'react-router';


let NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
