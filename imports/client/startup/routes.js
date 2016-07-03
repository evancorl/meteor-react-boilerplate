import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from '../pages/home';
import MainLayout from '../components/main-layout';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
