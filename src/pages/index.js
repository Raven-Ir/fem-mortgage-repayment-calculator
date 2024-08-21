import * as React from "react"
import General from '../components/General'

const IndexPage = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex ">
          <div className="">
            <h1>Mortgage Calculator</h1>
            <button>Clear All</button>

            <form>
              <label for="mamount">Mortgage Amount</label>
              
              <input type="text" id="mamount"></input>
              
              <label for="mterm">Mortgage Term</label>
              <br/>
              <input type="number" id="mterm"></input>

              <label for="mrate">Interest Rate</label>
              <input type="number" id="mrate"></input>

              <br/>
              <label>Mortgage Type</label>
              <br />
              <input type="radio" id="repayment" name="mortgate-type" value="repayment" />
              <label>Repayment</label>
              <br />
              <input type="radio" id="interest" name="mortgate-type" value="interest-only" />
              <label>Interest Only</label>
              <br/>
              <button type="submit">Calculate Repayments</button>
            </form>

          </div>
          <div>
            <General />
          </div>
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
  