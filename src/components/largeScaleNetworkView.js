import React, { Component } from 'react';
import ForceGraphWrapper from "./forceGraphWrapper";
import { serverAddress } from '../constants';
import '../style/App.css';

class LargeScaleNetwork extends Component {

    state = {
      network: [],
      networkLoaded: false
    }

    componentDidMount() {
      fetch (serverAddress + `network`)
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
              <div className="homepage--itemlist">
                  <ForceGraphWrapper network={this.state.network}/>
              </div>
          </div>
        )
      }
  }

  export default LargeScaleNetwork

