import React, { Component } from 'react';

import ContributionList from './contributionList';
import { serverAddress } from '../constants';
import '../style/App.css';

class ContributionsPage extends Component {

    state = {
      contributions: [],
    }

    componentDidMount() {
      fetch (serverAddress + 'contributions')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contributions: data })
      })
      .catch(console.log)
    }

    render() {
        return (
          <div>
              <div className="homepage--columns">
                  <div className="homepage--itemlist">
                      <ContributionList contributions={this.state.contributions.slice(0,100)} />
                  </div>
              </div>
          </div>
        )
      }
  }

  export default ContributionsPage