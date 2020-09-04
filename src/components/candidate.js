import React from 'react'

const Candidate = ({ candidate }) => {
  return (
        <div className="card" key={ candidate.candidateId }>
          <div className="card-body">
            <h5 className="card-title">{candidate.candidateName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{candidate.candidateId}</h6>
            <p className="card-text">{candidate.office}</p>
            <ul class="list-group list-group-flush">
              { Object.getOwnPropertyNames(candidate).map((attribute) => (
                <li class="list-group-item">{ attribute }: {candidate[attribute] }</li>
              ))}
            </ul>
          </div>
        </div>
  )
};

export default Candidate