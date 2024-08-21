import React from 'react'
import EmptyPicture from '../images/illustration-empty.svg' 

const General = () => {
  return (    
    <div className='flex items-center justify-center'>
      <div className='bg-slate-700 flex flex-col items-center rounded-r-2xl m-3 p-4'>
          <EmptyPicture />
          <p className='text-slate-100'>Results shown here</p>
          <p className='text-slate-500 w-96 text-center'>Complete the form and click "calculate repayments" to see what 
            your montly repayments would be.
          </p>
      </div>
    </div>
  )
}

export default General