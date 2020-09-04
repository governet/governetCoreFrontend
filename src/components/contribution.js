import React from 'react'

const Contribution = ({ contribution }) => {
  return (
        <div className="card" key={ contribution.transactionId }>
          <div className="card-body">
            <h5 className="card-title">{contribution.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{contribution.transactionId}</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Ammount: ${contribution.transactionAmmount }</li>
              <li class="list-group-item">Candidate: {contribution.candidateId}</li>
              <li class="list-group-item">Date: {contribution.transactionDate}</li>
            </ul>
            <ul class="list-group list-group-flush">
              { Object.getOwnPropertyNames(contribution).map((attribute) => (
                <li class="list-group-item">{ attribute }: {contribution[attribute] }</li>
              ))}
            </ul>
          </div>
        </div>
  )
};

export default Contribution