import React, { Component } from 'react';
import ContributionList from './components/contributionList';
import CandidateList from './components/candidateList';
import CommitteeList from './components/committeeList';
import ContributionTimeline from './components/graphs/barGraph';

import './style/App.css';

class App extends Component {

    state = {
      candidates: [],
      committees: [],
      contributions: []
    }

    componentDidMount() {
      fetch('http://127.0.0.1:8080/candidates')
      .then(res => res.json())
      .then((data) => {
        this.setState({ candidates: data })
      })
      .catch(console.log)

      fetch ('http://127.0.0.1:8080/committees')
      .then(res => res.json())
      .then((data) => {
        this.setState({ committees: data })
      })
      .catch(console.log)

      fetch ('http://127.0.0.1:8080/contributions')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contributions: data })
      })
      .catch(console.log)
    }

    render() {
        return (
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
        )
      }
  }

  export default App

/*              
                #experimenting with the old graph class...really ugly, needs to be cleaned up.  
                <div>
                  <ContributionTimeline candidateId="H0AL02087" api_uri="http://127.0.0.1:8080/candidates/"/>
                </div>
                */