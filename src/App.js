import React, { Component } from 'react';
import CandidateList from './components/candidateList';
import ContributionList from './components/contributionList';
import CommitteeList from './components/committeeList';
import data from './data/data.json';
import { ForceGraph } from "./components/graphs/forceGraph";
import './style/App.css';
import { serverAddress } from './constants';

class App extends Component {

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

      fetch (serverAddress + 'network')
      .then(res => res.json())
      .then((data) => {
        this.setState({ network: data})
      })
      .then(this.setState({networkLoaded: true}))
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
                <div className="homepage--itemlist">
                    <header className="App-header">
                        Force Graph Example 2
                    </header>
                    <section>
                        <ForceGraph linksData={this.state.network.links} nodesData={this.state.network.nodes} nodeHoverTooltip="LAME!" />
                    </section>
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