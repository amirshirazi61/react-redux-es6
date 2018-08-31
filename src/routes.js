import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import Header from './components/common/header';
import CoursesPage from './components/course/coursesPage';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  </Provider>
);
