import React from 'react'
import CommitteeList from './committeeList';

const Committee = ({ committee }) => {
  return (
        <div className="card" key={ committee.committeeId }>
          <div className="card-body">
            <h5 className="card-title">{committee.committeeName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{committee.committeeId}</h6>
            <ul class="list-group list-group-flush">
              { Object.getOwnPropertyNames(committee).map((attribute) => (
                <li class="list-group-item">{ attribute }: {CommitteeList[attribute] }</li>
              ))}
            </ul>
          </div>
        </div>
  )
};

export default Committee