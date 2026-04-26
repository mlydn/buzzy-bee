/* eslint-disable react/prop-types */
import { useCollapse } from 'react-collapsed'
import bee from './assets/bee-extracted.png'
import header from './assets/header-new.jpeg'
import moneybirdExpert from './assets/aP-Gr7pReVYa3tfl_Moneybird-Expert-Standaard.svg'
import './App.css'

const serviceCards = [
  {
    title: 'Bookkeeping that stays current',
    description:
      'Daily transactions, ledgers, reconciliations, and clean records handled with consistency so nothing piles up in the background.',
  },
  {
    title: 'Reporting with useful detail',
    description:
      'Clear financial statements and performance visibility that make it easier to understand what your business is doing month to month.',
  },
  {
    title: 'Tax and filing support',
    description:
      'Preparation and filing support built into the service so deadlines, obligations, and available reliefs are managed properly.',
  },
]

const audienceCards = [
  'Freelancers and self-employed professionals who need a dependable admin rhythm.',
  'Small business owners who want better visibility into income, costs, and cash flow.',
  'Growing businesses that need cleaner processes, stronger controls, or a better software setup.',
]

const workflowSteps = [
  {
    title: 'Set up the right system',
    description:
      'Financial processes are reviewed, simplified, and built around practical day-to-day use.',
  },
  {
    title: 'Keep records moving',
    description:
      'Receipts, purchase invoices, bank activity, and sales records are kept up to date in Moneybird.',
  },
  {
    title: 'Review and advise',
    description:
      'Results are monitored so issues, opportunities, and next actions can be surfaced early.',
  },
]

function Disclosure({ eyebrow, title, children, defaultExpanded = false }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded,
  })

  return (
    <article className="disclosure">
      <button className="disclosure__trigger" type="button" {...getToggleProps()}>
        <span>
          <span className="eyebrow">{eyebrow}</span>
          <span className="disclosure__title">{title}</span>
        </span>
        <span className="disclosure__icon" aria-hidden="true">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
      <div {...getCollapseProps()}>
        <div className="disclosure__content">{children}</div>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__copy">
            <div className="brand-mark">
              <img src={bee} alt="" />
              <span>Buzzy Bee Bookkeeping</span>
            </div>
            <p className="eyebrow">Remote bookkeeping for modern small businesses</p>
            <h1>Clear books, calmer admin, and financial support that keeps up with your business.</h1>
            <p className="hero__lede">
              Buzzy Bee Bookkeeping supports freelancers, ZZP businesses, and growing
              companies with reliable bookkeeping, tax preparation, and practical financial
              guidance.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">
                Start an enquiry
              </a>
              <a className="button button--secondary" href="#services">
                Explore services
              </a>
            </div>
            <dl className="hero__stats">
              <div>
                <dt>Focused on</dt>
                <dd>Small businesses</dd>
              </div>
              <div>
                <dt>Working style</dt>
                <dd>Fully remote</dd>
              </div>
              <div>
                <dt>Software</dt>
                <dd>Moneybird</dd>
              </div>
            </dl>
          </div>
          <div className="hero__visual">
            <div className="hero__image-frame">
              <img src={header} alt="Buzzy Bee Bookkeeping workspace overview" />
            </div>
            <div className="hero__note">
              <strong>Practical support, not vague reporting.</strong>
              <p>
                Systems, bookkeeping, filing, and business administration aligned around
                what owners actually need to run day to day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--services" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Core financial support without the usual friction.</h2>
          <p>
            The service is built for business owners who need accurate books, responsive
            support, and fewer admin tasks competing with revenue-generating work.
          </p>
        </div>
        <div className="service-grid">
          {serviceCards.map((card) => (
            <article className="service-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="panel panel--accent">
          <p className="eyebrow">Who this helps</p>
          <h2>Designed for owners who need structure without adding overhead.</h2>
          <ul className="check-list">
            {audienceCards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <p className="eyebrow">What changes</p>
          <h2>More visibility, fewer loose ends.</h2>
          <p>
            Outsourcing bookkeeping should do more than move admin off your desk. It
            should give you a better system, cleaner reporting, and more confidence in
            the numbers you rely on.
          </p>
          <p>
            That includes support with setup, process improvements, forecasting, controls,
            and performance analysis when those are relevant to the stage of your business.
          </p>
        </div>
      </section>

      <section className="section section--workflow">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>A simple workflow that keeps administration moving.</h2>
        </div>
        <div className="workflow-grid">
          {workflowSteps.map((step, index) => (
            <article className="workflow-card" key={step.title}>
              <span className="workflow-card__index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Experienced support across bookkeeping, systems, and business administration.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Buzzy Bee Bookkeeping is led by a part-qualified accountant with Certified
              Accounts Technician training and experience supporting small businesses as
              well as work within investment banking environments.
            </p>
            <p>
              Strengths include setting up financial systems, improving current processes,
              supporting automation, management accounting, forecasting, financial control,
              and performance analysis.
            </p>
          </div>
          <div className="about-copy">
            <p>
              The service is fully remote and built around Moneybird, making it easy to
              upload receipts, manage invoices, connect bank activity, and stay on top of
              paid or overdue balances from a phone, tablet, or laptop.
            </p>
            <p>
              Support can scale from a few hours to a few days depending on what the
              business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--faq">
        <div className="section-heading">
          <p className="eyebrow">Details</p>
          <h2>What working together can cover.</h2>
        </div>
        <div className="disclosure-list">
          <Disclosure
            eyebrow="Freelancers and ZZP"
            title="Bookkeeping support for self-employed businesses"
            defaultExpanded
          >
            <p>
              Self-employment offers flexibility, but the administration side can quickly
              take time away from client work. Reliable bookkeeping and tax support reduce
              that burden and help protect margins.
            </p>
          </Disclosure>
          <Disclosure eyebrow="Digital bookkeeping" title="A software setup that stays accessible">
            <p>
              Moneybird keeps invoices, receipts, payment matching, and financial insight
              in one place so records can stay current without creating extra admin loops.
            </p>
          </Disclosure>
          <Disclosure eyebrow="Tax and advice" title="Filing support with a personal service">
            <p>
              Tax preparation and filing are included, alongside practical advice on
              expenses, revenue, and day-to-day business administration when opportunities
              or risks are visible in the numbers.
            </p>
          </Disclosure>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="contact-card">
          <p className="eyebrow">Contact</p>
          <h2>Have an enquiry about your bookkeeping or admin setup?</h2>
          <p>
            Share a few details about your business, your current process, and where you
            need support. Buzzy Bee Bookkeeping can then recommend the right level of
            service.
          </p>
          <p className="contact-card__prompt">
            Useful starting points: your business size, current software, monthly admin
            workload, and whether you need ongoing bookkeeping or one-off support.
          </p>
          <a
            className="expert-badge"
            href="https://www.moneybird.nl/experts/buzzy-bee-book-keeping/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={moneybirdExpert} alt="Moneybird Expert profile badge" />
            <span>View the Moneybird expert profile</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
