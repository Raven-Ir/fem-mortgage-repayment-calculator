import * as React from "react"
import General from '../components/General'

const IndexPage = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex ">
          <div className="p-2 m-2">
            <div className="flex justify-between">
              <h1 className="text-2xl pr-2 font-bold">Mortgage Calculator</h1>
              <button>Clear All</button>
            </div>

            
            <form className="pt-2">
              <table>
                <tr>
                  <td><label for="mamount">Mortgage Amount</label></td>
                  <td><input type="text" id="mamount"></input></td>
                </tr>
                <tr className="">
                  <td><label for="mterm">Mortgage Term</label></td>
                  <td><label for="mrate">Interest Rate</label></td>
                </tr>
                <tr>
                  <td><input type="number" id="mterm"></input></td>
                  <td><input type="number" id="mrate"></input></td> 
                </tr>
              <tr></tr>
              <label>Mortgage Type</label>
              <br />
              <input type="radio" id="repayment" name="mortgate-type" value="repayment" />
              <label>Repayment</label>
              <br />
              <input type="radio" id="interest" name="mortgate-type" value="interest-only" />
              <label>Interest Only</label>
              </table>
              
              <button type="submit"
                className=" border-2 ">Calculate Repayments</button>
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
  