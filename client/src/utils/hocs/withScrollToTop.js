import React, { useEffect } from "react";

const withScrollToTop = WrappedComponent => props => {
  useEffect(() => {
    window.scrollTo(window.top);
  }, []);

  return <WrappedComponent {...props} />;
};

export default withScrollToTop;
