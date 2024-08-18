import React from 'react'

const Results = ( { repayment_result } ) => {
  return (
    <div>
        <p>Your results</p>
        <p>Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate repayments"
            again.
        </p>
        <div>
            <p>Your monthly repayments</p>
            <p>{repayment_result.monthly}</p>
            <line />
            <p>Total you'll repay over the term</p>
            <p>{repayment_result.total}</p>
        </div>
    </div>
  )
}

export default Results