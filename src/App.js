import React, { Component } from 'react';
import CandidateList from './components/candidateList';
import ContributionList from './components/contributionList';
import CommitteeList from './components/committeeList';
import ForceGraphWrapper from "./components/forceGraphWrapper";
import ErrorBoundary from "./components/errorBoundry";
import { serverAddress } from './constants';
import './style/App.css';
import {Router, Route} from 'react-router';

class SummaryPage extends Component {

    state = {
      candidates: [],
      committees: [],
      contributions: [],
      network: [],
      networkLoaded: false
    }

    componentDidMount() {
      fetch(serverAddress + 'candidates')
      .then(res => res.json())
      .then((data) => {
        this.setState({ candidates: data })
      })
      .catch(console.log)

      fetch (serverAddress + 'committees')
      .then(res => res.json())
      .then((data) => {
        this.setState({ committees: data })
      })
      .catch(console.log)

      fetch (serverAddress + 'contributions')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contributions: data })
      })
      .catch(console.log)

      fetch (serverAddress + 'network/candidates?candId=H2MA04073&candId=S2MA00170')
      .then(res => res.json())
      .then((data) => {
        this.setState({ network: data})
      })
      .then(this.setState({networkLoaded: true}))
      .catch(console.log)
    }

    render() {
        return (
          <div>
              <div className="homepage--columns">
                  <div className="homepage--itemlist">
                      <ContributionList contributions={this.state.contributions.slice(0,100)} />
                  </div>
                  <div className="homepage--itemlist">
                      <CandidateList candidates={this.state.candidates.slice(0,100)} />
                  </div>
                  <div className="homepage--itemlist">
                      <CommitteeList committees={this.state.committees.slice(0,100)} />
                  </div>
              </div>
              <div className="homepage--itemlist">
                  <ForceGraphWrapper network={this.state.network}/>
              </div>
          </div>
        )
      }
  }

  export default SummaryPage