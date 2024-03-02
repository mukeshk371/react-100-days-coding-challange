import React from 'react';
import { useRouteError } from 'react-router-dom';
import { NotFoundStyles } from './Styles';

const NotFound = () => {
  const errorInfo = useRouteError();
  console.log(errorInfo);
  return (
    <NotFoundStyles>
      <div className="not-found">
        <h1>{errorInfo.status} - {errorInfo.statusText}</h1>
        <p>Sorry, the page you are looking for might have been removed or is temporarily unavailable.</p>
        <p>{errorInfo.error.message}</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </NotFoundStyles>
  );
}

export default NotFound;
