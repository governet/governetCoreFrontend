import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import summaryPage from './components/summaryPage'
import ContributionNetwork from './components/candidateContributionNetworkPage'
import LargeScaleNetwork from './components/largeScaleNetworkView'
import CandidatesPage from './components/candidatesPage'
import CommitteesPage from './components/committeesPage'
import ContributionsPage from './components/contributionsPage'

render(
    <BrowserRouter>
        <Route 
        	exact path="/"
        	component={summaryPage}
        />
        <Route 
        	exact path="/candidates" 
        	component={CandidatesPage}
        />
        <Route 
        	exact path="/committees" 
        	component={CommitteesPage}
        />
        <Route 
        	exact path="/contributions" 
        	component={ContributionsPage}
        />
        <Route 
        	exact path="/network" 
        		render={() => (
    				<ContributionNetwork candId="S2MA00170"/>
    			)}
        />
        <Route 
        	exact path="/bigNetwork" 
        		render={() => (
    				<LargeScaleNetwork/>
    			)}
        />
    </BrowserRouter>,
    document.getElementById('root')
);