import React, { Component } from 'react';

import CandidateList from './candidateList';
import { serverAddress } from '../constants';
import '../style/App.css';

class CandidatesPage extends Component {

    state = {
      candidates: [],
    }

    componentDidMount() {
      fetch (serverAddress + 'candidates')
      .then(res => res.json())
      .then((data) => {
        this.setState({ candidates: data })
      })
      .catch(console.log)
    }

    render() {
        return (
          <div>
              <div className="homepage--columns">
                  <div className="homepage--itemlist">
                      <CandidateList candidates={this.state.candidates} />
                  </div>
              </div>
          </div>
        )
      }
  }

  export default CandidatesPage