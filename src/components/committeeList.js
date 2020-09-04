import React from 'react'
import Committee from './committee'
import '../style/App.css';

const CommitteeList = ({ committees }) => {
  return (
    <div className="itemlist--total">
      <div className="itemlist--header">
        <center><h1>Committees</h1></center>
      </div>
      <div className="itemlist--scroller">
        {committees.map((committee) => (
          <Committee key= { committee.committeeId } committee={ committee }/>
        ))}
      </div>
    </div>
  )
};

export default CommitteeList