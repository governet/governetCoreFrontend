import React from 'react'
import Contribution from './contribution'
import '../style/App.css';

const ContributionList = ({ contributions }) => {
  return (
    <div className="itemlist--total">
      <div className="itemlist--header">      
          <center><h1>Contributions</h1></center>
      </div>
      <div className="itemlist--scroller">
        {contributions.map((contribution) => (
          <Contribution key={ contribution.transactionId } contribution={ contribution }/>
        ))}
      </div>
    </div>
  )
};

export default ContributionList