import React from 'react'
import EmptyPicture from '../images/illustration-empty.svg' 

const General = () => {
  return (    
    <div className='bg-slate-800'>
        <EmptyPicture />
        <p className='text-slate-100'>Results shown here</p>
        <p className='text-slate-500'>Complete the form and click "calculate repayments" to see what 
          your montly repayments would be.
        </p>
    </div>
  )
}

export default General