import React from 'react';
import { withRouter } from 'react-router';


class ScrollTo extends React.Component {

  componentDidUpdate(prevProps) {
  	
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 350)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollTo);