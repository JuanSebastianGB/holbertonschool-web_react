import React from 'react';

export const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = WrappedComponent.name
        ? WrappedComponent.name
        : 'Component';
    }
    componentDidMount() {
      console.log(`Component ${this.displayName} is mounted`);
    }
    componentWillMount() {
      console.log(`Component ${this.displayName} is going to unmount`);
    }

    displayName = () => console.log(`WithLogging(${this.displayName})`);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
