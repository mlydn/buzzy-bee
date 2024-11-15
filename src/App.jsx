import header from './assets/header.jpeg'
import './App.css'
import {useCollapse} from 'react-collapsed'

function Section(props) {
  const config = {
      defaultExpanded: props.defaultExpanded || false,
      collapsedHeight: props.collapsedHeight || 0
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          <div className="title"><h3>{props.title}</h3></div>
          <div className="icon">
              <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
          </div>
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              {props.children}
          </div>
      </div>
  </div>
  );
}

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
      <div className="sections">
        <Section title="About" defaultExpanded="false">
          <div className="content">
            <p>I am an experienced part-qualified accountant (CAT - Certified Accounts Technician) with a demonstrated history of working for small businesses and within Investment Banking. My strengths include helping to start up any financial system set-ups, improvements or automation of new or current processes, business administration, financial forecasting, financial control, management accounting, and performance analysis.</p>
            <p>I offer a full remote bookkeeping and business administration service using Moneybird. I have a range of different pricing and service options to suit all sizes of business. If you need a couple of hours or up to a couple of days - I can help!</p>
            <p>Please get in touch with your enquiry.</p>
          </div>
        </Section>
        <Section title="Bookkeeping for Freelancers, ZZP & Entrepreuneurs">
          <div className="content">
            <p>Being self-employed has a lot of benefits, but can also require hard work. Drawbacks are unpredictable income, long working hours, no sick pay, finding enough work to pay the bills and making a profit. Besides this, self-employment comes with a set of rules for your administration.</p>
            <p>Becoming successful means you need to make smart choices. Administrative hours cost money, since you can&apos;t work when you are doing them. Hiring us to handle your bookkeeping and taxes will not only give you ease of mind. It will actually save you money. See it as an investment on your company and not as an expense.</p>
          </div>
        </Section>
        <Section title="Digital Bookkeeping">
          <div className="content">
            <p>I work with the online software Moneybird and all you need is a smartphone, tablet or laptop. When you get a receipt or purchase invoice, simply upload it to your personal environment. You can use the same software to send your invoices and connect it to your bank account. It will register & match your payments allowing you to do the things you love most within your business. This gives you detailed insights as to which invoices are paid or overdue, as well as a dashboard of your financial results.</p>
          </div>
        </Section>
        <Section title="Taxes & Personal Service Included">
          <div className="content">
            <p>Preparation and filing of your tax returns are included in the price, this shall save you time on both yout BTW and Income Tax Return. An advantage to this is that you don&apos;t have to research which benefits or exemptions you are entitled to.</p>
            <p>A high level of personal service & advice is also included. Because your administration shall be handled I can then give you personal advice for your business, your expenses and your revenue streams if I see opportunities in doing so.</p>
          </div>
        </Section>
      </div>
      <div id="footer">
        Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </>
  )
}

export default App
