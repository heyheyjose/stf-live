import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Message from '../sections/message';
import News from '../sections/news';
import Giving from '../sections/giving';
import Sections from '../sections/sections';
import Groups from '../sections/groups';
import Connect from '../sections/connect';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionName: '',
    };

    this.displaySection = this.displaySection.bind(this);
  }

  displaySection(sectionName) {
    if (this.state.sectionName.length > 0) {
      this.setState({ sectionName: '' });
    } else {
      this.setState({ sectionName });
    }
  }

  render() {
    const { section } = this.props;
    const showMessage = this.state.sectionName === 'message';
    const showNews = this.state.sectionName === 'news';
    const showGiving = this.state.sectionName === 'giving';
    const showSections = this.state.sectionName === 'sections';
    const showGroups = this.state.sectionName === 'groups';
    const showConnect = this.state.sectionName === 'connect';
    return (
      <div>
        <div className={`section-main ${section.sectionName}`}>
          <Link
            to={`/${section.sectionName}`}
            onClick={() => this.displaySection(section.sectionName)}
          >
            <span className={`fa ${section.icon}`} />
            <span>
              {section.title}
            </span>
            <span
              className={classNames({
                'fa fa-close': this.state.sectionName.length > 0,
              })}
            />
          </Link>
        </div>
        <div className={classNames('hide', { show: showMessage })}>
          <Message />
        </div>
        <div className={classNames('hide', { show: showNews })}>
          <News />
        </div>
        <div className={classNames('hide', { show: showGiving })}>
          <Giving />
        </div>
        <div className={classNames('hide', { show: showSections })}>
          <Sections />
        </div>
        <div className={classNames('hide', { show: showGroups })}>
          <Groups />
        </div>
        <div className={classNames('hide', { show: showConnect })}>
          <Connect />
        </div>
      </div>
    );
  }
}

export default Section;

Section.propTypes = {
  section: PropTypes.object.isRequired,
};
