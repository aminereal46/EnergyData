// @flow

import React from 'react';

export const withInfiniteScroll = (Component) => {
  type Props = {
    onEndOfPageReached: Function,
  };
  return class WithInfiniteScroll extends React.Component<Props, State> {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    isEndPage = () => {
      const html = document.documentElement;
      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const currentHeight = window.scrollY + window.innerHeight;

      return height - currentHeight < 2;
    };

    onScroll = () => {
      const { onEndOfPageReached } = this.props;
      if (this.isEndPage()) {
        onEndOfPageReached();
      }
    };

    render() {
      return <Component {...this.props} />;
    }
  };
};
