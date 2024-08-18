import * as React from "react"
import General from '../components/General'

const IndexPage = () => {
  return (
    <>
      <div className="">
        <div>
          <h1>Mortgage Calculator</h1>
          <button>Clear All</button>

          <form>
            <label>Mortgage Amount</label>
            <input type="text"></input>
            
            <label>Mortgage Term</label>
            <input type="number"></input>

            <label>Interest Rate</label>
            <input type="number"></input>

            <label>Mortgage Type</label>

            <input type="radio" id="repayment" name="mortgate-type" value="repayment" />
            <label>Repayment</label>
            <input type="radio" id="interest" name="mortgate-type" value="interest-only" />
            <label>Interest Only</label>

            <button type="sumbit">Calculator Repayments</button>
          </form>

        </div>
        <div>
          <General />
        </div>
      </div>
     
    </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Mortgage Payment</title>
    <link id="icon" rel="icon" href="src/images/favicon-32x32.png"></link>
    <meta name="description" content="Mortgage Payment"/>
  </>
)
  