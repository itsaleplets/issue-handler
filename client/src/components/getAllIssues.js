import React, { Component } from 'react';
import { getIssues } from '../services/api';
import HandleIssue  from '../components/HandleIssue';


class IssuesList extends Component {
  constructor() {
    super();
    this.requestAllIssues = this.requestAllIssues.bind(this);
    this.state = {
      issues: [],
      showIssues: true,
    }
  }

  async requestAllIssues() {
    const result = await getIssues()
    this.setState({
        issues: result.response,
        showIssues: false });
  };


  render() {
    const { issues, showIssues } = this.state;

    return (

      <div>
        {showIssues ? <HandleIssue /> : issues.data.map((issue) => (
          <fieldset>
            <p>{issue.title}</p>
            <p>{issue.description}</p>
            <p>{issue._id}</p>
          </fieldset>
        )) }
        <button onClick={() => this.requestAllIssues()}>Get All Issues</button>
          {console.log(issues.data)}
      </div>
    );
  }
}

export default IssuesList;

