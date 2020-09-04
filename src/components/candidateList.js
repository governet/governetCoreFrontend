import React from 'react'
import Candidate from './candidate'
import '../style/App.css';

const CandidateList = ({ candidates }) => {
  return (
    <div className="itemlist--total">
      <div className="itemlist--header">
        <center><h1>Candidates</h1></center>
      </div>
      <div className="itemlist--scroller">
        {candidates.map((candidate) => (
          <Candidate key={ candidate.candidateId } candidate={ candidate }/>
        ))}
      </div>
    </div>
  )
};

export default CandidateList