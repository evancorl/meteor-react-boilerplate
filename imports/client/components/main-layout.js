import React from 'react';

const MainLayout = props => (
  <main>
    {props.children}
  </main>
);

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default MainLayout;
