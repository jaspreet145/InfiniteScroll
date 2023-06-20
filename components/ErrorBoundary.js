import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="mx-auto flex justify-center items-center flex-col">
        <h1>Oops! Something went wrong.</h1>
        <p>We apologize for the inconvenience.</p>
      </div>
    );
  }
  return children;
};

export default ErrorBoundary;
