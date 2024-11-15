import header from './assets/header.jpeg'
import './App.css'
import {useCollapse} from 'react-collapsed';

function App() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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
      <div className="collapsible card">
        <div className="header" {...getToggleProps()}>
            <h2>About {isExpanded ? <img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAz0lEQVR4nO3YywrCMBBG4fOE1oWDC/vsCiq+RAuVQLpzvDVtJvAfCJSki/nIqgWllFJKKaUqtwfuwDU/N5kBAzDlNQI9jSOmFjHmIJrCHF8gBmcvvdvMTYzACTg4Z31LiLnwGPsCER5jPyDCYuwPRDiMLUCEwVgBRHWMFURUw9gKiM0xtiJiM4xtgFgdYxsi5opjaiCKY2oiimEiIBZjuoDfDkdnpjSr2y0Y4h0m/dBwewREeJg0q1uXpedPV1epDrjkGXe1h1FKKaWUUrTVE5bz7NyN3sYLAAAAAElFTkSuQmCC" alt="collapse" /> : <img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVR4nO3YSwrCMBRG4eMOVQwZ6OoVQfGxgQqVQgsiSe0zucX/QGdJuR+hgxSUUkoppZTqmQPuwBlYY68NcAGegI8tWgE3oKyfom1xhnw9UzPfo5452PVjoSWM/0KU9azRtoENuTE+MlM1a2u7wMYXcCDPN1sEZtl3fYEFjBuLsIBxUyFyYtzUiBwYNxciJWZ2RApMMsScmOSIOTDZEFNisiOmwJhBjMGYQwzBmEX0wZhHdMEsBvHr7mDtjjP4ZBZzEl0xi0LEMItENFW/lE7A0ejvJaWUUkop9U+9AdnJ7S7GX9jsAAAAAElFTkSuQmCC" alt="expand"></img>}</h2>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
              <p>I am an experienced part-qualified accountant (CAT - Certified Accounts Technician) with e demonstrated history of working for small businesses and within Investment Banking.  My strengths include helping to start up any financial system set-ups, improvements or automation of new or current processes, business administration, financial forecasting, financial control, management accounting, and performance analysis.</p>
              <p>I offer a full remote bookkeeping and business administration service using Moneybird.  I have a range of different pricing and service options to suit all sizes of business.  If you need a couple of hours or up to a couple of days - I can help!</p>
              <p>Please get in touch with your enquiry.</p>
            </div>
        </div>
    </div>
      <div>
        Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </>
  )
}

export default App
