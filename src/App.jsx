import header from './assets/header.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div id="header">
        <img src={header} />
      </div>
      <h1>Buzzy Bee Bookkeeping</h1>
      <div className="card">
        <p>
          At Buzzy Bee Book-Keeping, we specialize in providing meticulous and reliable bookkeeping services tailored to meet the unique needs of small to medium-sized businesses.
        </p>
        <h2>Our Services Include:</h2>
        <p>
          <ul>
            <li id="book">
              <strong>Comprehensive Bookkeeping:</strong>
              <span className="description">From recording daily transactions to managing ledgers, we ensure your financial records are always up-to-date and accurate</span>
            </li>
            <li id="health-graph">
              <strong>Financial Reporting:</strong>
              <span className="description">We provide detailed financial statements that give you a clear view of your business&apos;s financial health</span>
            </li>
            <li id="ledger">
              <strong>Accounts Payable & Receivable:</strong>
              <span className="description">Efficient management of your payable and receivables to optimize cash flow</span>
              </li>
            <li id="bank-euro">
              <strong>Bank Reconciliation:</strong>
              <span className="description">Regular reconciliation of your bank statements to prevent discrepancies and ensure accuracy</span>
            </li>
            <li id="accounting">
              <strong>Tax Preparation & Filing:</strong>
              <span className="description">Timely and precise tax preparation to keep you compliant and avoid penalties</span>
              </li>
          </ul>
        </p>
      </div>
      <div>
        Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </>
  )
}

export default App
