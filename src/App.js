import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// import logo from './logo.svg';
// import homeLogo from './STF_HomeLogo.png';
import roundLogo from './stf_large.jpg';
import './App.css';
import Section from './core/section';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: 'latest message',
          sectionName: 'message',
          icon: 'fa-list-ul',
        },
        {
          id: 2,
          title: "what's happening",
          sectionName: 'news',
          icon: 'fa-calendar',
        },
        {
          id: 3,
          title: 'giving',
          sectionName: 'giving',
          icon: 'fa-building-o',
        },
        { id: 4, title: 'sections', sectionName: 'sections', icon: 'fa-users' },
        {
          id: 5,
          title: 'small groups',
          sectionName: 'groups',
          icon: 'fa-dot-circle-o',
        },
        { id: 6, title: 'connect', sectionName: 'connect', icon: 'fa-link' },
      ],
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/">
              <img src={roundLogo} className="App-logo" alt="logo" />
            </Link>
          </div>

          {this.state.sections.map(s => <Section key={s.id} section={s} />)}
        </div>
      </Router>
    );
  }
}

export default App;
