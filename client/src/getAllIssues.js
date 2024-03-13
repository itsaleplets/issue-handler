import React, { Component } from 'react';
import { getIssues } from './services/api';


class IssuesList extends Component {
  constructor() {
    super();
    this.handleFetch = this.requestAllIssues.bind(this);
    this.state = {
      issues: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.requestAllIssues();
  }

  async requestAllIssues() {
    const result = await getIssues()
    this.setState({
        issues: result.response,
        loading: false });
  };


  render() {
    const { issues, loading } = this.state;

    return (

      <div>
          {console.log(issues)}
      </div>
    );
  }
}

export default IssuesList;