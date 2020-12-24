import React, { Component } from 'react';

import { serverAddress } from '../constants';
import CommitteeList from './committeeList';
import '../style/App.css';

class CommitteesPage extends Component {

    state = {
      committees: [],
    }

    componentDidMount() {
      fetch (serverAddress + 'committees')
      .then(res => res.json())
      .then((data) => {
        this.setState({ committees: data })
      })
      .catch(console.log)
    }

    render() {
        return (
          <div>
              <div className="homepage--columns">
                  <div className="homepage--itemlist">
                      <CommitteeList committees={this.state.committees} />
                  </div>
              </div>
          </div>
        )
      }
  }

  export default CommitteesPage