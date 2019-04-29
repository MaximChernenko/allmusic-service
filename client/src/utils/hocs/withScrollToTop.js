import React, { Component } from "react";

const withScrollToTop = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      window.scrollTo(window.top);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withScrollToTop;
