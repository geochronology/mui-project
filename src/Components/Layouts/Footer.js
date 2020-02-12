import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import uuid from 'uuid/v4';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "legs"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    console.log("handling change")
  }

  render() {
    const { muscleGroups, category, onSelect } = this.props
    const onIndexSelect = (e, index) => onSelect(index === 0 ? '' : muscleGroups[index - 1])
    const index = category
      ? muscleGroups.findIndex(group => group === category) + 1
      : 0

    return (
      <Paper className="FooterTabs">
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" key={uuid()} />
          {muscleGroups.map(group =>
            <Tab label={group} key={uuid()} />
          )}
        </Tabs>
      </Paper>
    );
  }
}

export default Footer;