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
          I am an experienced part-qualified accountant (CAT – Certified Accounts Technician) with a demonstrated history of working for small businesses and within Investment Banking. My strengths include helping to start up any financial system set-ups, improvements or automation of new or current processes, business administration, financial forecasting, financial control, management accounting, and performance analysis.
        </p>
        <p>
          I offer a full remote bookkeeping and business administration service using Moneybird. I have a range of different pricing and service options to suit all sizes of business. If you need a couple of hours or up to a couple of days - I can help! Please get in touch with your enquiry.
        </p>
      </div>
    </>
  )
}

export default App
