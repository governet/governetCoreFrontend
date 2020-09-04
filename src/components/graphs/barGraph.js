import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

// Sets of helper functions to reduce the contribution lists

// reducer function for summing contributions
const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

//Generate a list of unique committee IDs among all contributions
const cmteList = (contributions) => {
    console.log("CMTELIST")
    console.log(contributions)
    return [...new Set(contributions.map(item => item.committeeId))]
}

//Sum the total contributions given by a committee, based on the contribution list
const cmteContributionSums = (committeeIds, contributionList) => {
        return(
            committeeIds.map(committeeId => {
                return {
                    'committeeId': committeeId, 
                    'transactionAmmount': (
                        contributionList.filter(contribution => contribution.committeeId === committeeId)
                        .map(item => parseFloat(item.transactionAmmount))
                        .reduce(reducer)
                        )}
            })
        )
}

class ContributionTimeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidateId: props.candidateId,
            contributionMinimum: 1000,
            contributionMaximum: 1000000000,
            api_uri: props.api_uri,
            svgWidth: 960,
            svgHeight: 500,
        };
    }
    componentDidMount() {
        let contributionsUrl = `${this.state.api_uri}${this.state.candidateId}/contributions`
        window.fetch(contributionsUrl).then((response) => {
            return response.json();
      }).then((json) => {
        this.setState({
            contributions: json,
            contributionsSum: cmteContributionSums(cmteList(json),json)
                .filter(item => item.transactionAmmount >= this.state.contributionMinimum)
                .filter(item => item.transactionAmmount <= this.state.contributionMaximum)
        });

      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })

    }

    render() {
        let margin = { top: 20, right: 20, bottom: 30, left: 40 };
        let height = this.state.svgHeight - margin.top - margin.bottom;
        let width = this.state.svgWidth - margin.left - margin.right;
        let x = scaleBand().rangeRound([0, width]).padding(0.1);
        let y = scaleLinear().rangeRound([height, 0]);
        return (
        <div className="App">
            <div className="Graph">
                <svg width={this.state.svgWidth} height={this.state.svgHeight}>
                    <g transform={`translate(${margin.left}, ${margin.top})`}>
                        <g
                            className="axis axis--x"
                            transform={`translate(0, ${height})`}
                            ref={node => select(node).call(axisBottom(x))}
                        />
                        <g className="axis axis--y">
                            <g ref={node => select(node).call(axisLeft(y).ticks(5, '$'))} />
                            <text transform="rotate(-90)" y="6" dy="0.71em" textAnchor="end">
                            Contribution in Dollars
                            </text>
                        </g>
                        {this.state.contributionsSum &&         
                            x.domain(this.state.contributionsSum.map(d => d['committeeId'])) &&
                            y.domain([0, max(this.state.contributionsSum, d => d['transactionAmmount'])]) &&
                            this.state.contributionsSum
                            .map(d => (
                            <rect
                            key={d['committeeId']}
                            className="bar"
                            x={x(d['committeeId'])}
                            y={y(d['transactionAmmount'])}
                            width={x.bandwidth()}
                            height={height - y(d['transactionAmmount'])}
                            />
                        ))}
                    </g>
                </svg>
            </div> 
        </div>
        );
      }
    }

export default ContributionTimeline;