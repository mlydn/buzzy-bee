import header from './assets/header.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div>
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
            <li><strong>Comprehensive Bookkeeping:</strong> From recording daily transactions to managing ledgers, we ensure your financial records are always up-to-date and accurate</li>
            <li><strong>Financial Reporting:</strong> We provide detailed financial statements that give you a clear view of your business's financial health</li>
            <li><strong>Accounts Payable & Receivable:</strong> Efficient management of your payable and receivables to optimize cash flow</li>
            <li><strong>Bank Reconciliation:</strong> Regular reconciliation of your bank statements to prevent discrepancies and ensure accuracy</li>
            <li><strong>Tax Preparation & Filing:</strong> Timely and precise tax preparation to keep you compliant and avoid penalties</li>
          </ul>
        </p>
      </div>
      <div>
      <a target="_blank" href="https://icons8.com/icon/1UXA0mGrf9CT/bee">Bee</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </>
  )
}

export default App
