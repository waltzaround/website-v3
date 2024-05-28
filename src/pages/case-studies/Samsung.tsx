import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./case.css";
function Samsung() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Samsung Electronics NZ</title>
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Samsung Electronics NZ / Cheil NZ</strong>
          <br />
          Increasing NZ traffic 64%, by redesigning existing workflows and
          partnerships
        </h1>
        <img src="/images/projects/samsung.png" className="story-hero" />

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Samsung Electronics NZ sells various electronics like
                smartphones, tablets, TVs, and home appliances. They also have a
                B2B division. <br />
                <br />
                While contracting for Cheil New Zealand, I improved design
                processes for them, making projects between Samsung, Cheil and
                retail partners more efficient and effective.
              </p>
              <br />
            </div>
            <div>
              <h3>Role</h3>
              <p>
                UX Consultant
                <br /> (Aug 2020 → Nov 2020){" "}
              </p>{" "}
            </div>
            <br />
            <div>
              <h3>Categories</h3>{" "}
              <div className="category-container">
                <div className="category-tag">Web </div>
                <div className="category-tag">UX Research </div>
                <div className="category-tag">Product Design</div>
                <div className="category-tag">Web Development</div>
                <div className="category-tag">HTML</div>
                <div className="category-tag">CSS</div>

                <div className="category-tag">Design Systems </div>

                <div className="category-tag">B2B2C </div>
                <div className="category-tag">eCommerce </div>
                <div className="category-tag">Web Accessibility </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Challenge</h2>
            <ul>
              <li>
                Each so often, Samsung Electronics NZ had multiple product
                launches, and every retailer needed different deliverables for
                their online stores. This took up a lot of time and money to
                complete.
              </li>
              <li>
                Every online retailer had different standards, deliverable
                requirements and working styles when it came to new product
                launches.
              </li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>
                Designed then developed a new marketing design system / template
                library that was easy to use and maintain for the team, speeding
                up time to market 4X
              </li>
              <li>
                Achieved cost savings with the new template library by reducing
                work required for each new product launch
              </li>
              <li>
                New system resulted in a 64% increase in traffic to redesigned
                properties and a subsequent increase in sales.
              </li>
            </ul>
          </div>
        </div>
        <section className="">
          <h2 className="main-heading">About</h2>

          <p className="main-text">
            In late 2020, I was approached to work on a project for Samsung
            Electronics NZ. They were looking to improve their online presence
            and sales in New Zealand. I was brought in to help with the user
            experience of their online presence.
          </p>
          <p className="main-text">
            To get started, I reviewed their existing workflows and processes,
            particularly around new product launches. I found that they were
            spending a lot of time creating different unique deliverables for
            each retailer per specific product.
          </p>
          <p className="main-text">
            Because each retailer had unique requirements for the materials they
            needed, the team found themselves spending excessive time creating
            and managing various versions of deliverables. This resulted in
            significant time wastage.
          </p>
          <p className="main-text">
            Picture this: a new device is set to launch soon. However, the
            promotional materials the team receives for this launch are
            disjointed. They include massive Photoshop files, each several
            gigabytes in size, along with partially completed Magento templates
            provided by an overseas development team, just seven days before the
            launch date.
          </p>
          <p className="main-text">
            We would need to then refactor and reformat the content into various
            file types to suit each individual storefront template. This was for
            every individual retailer that was involved in selling the product
            in new zealand.
          </p>
          <p className="main-text">
            Every retailer had something different. Some were using Shopify,
            some were using bootstrap and ASP.NET, some were using Magento, and
            some were using custom CMSs.
          </p>
          <p className="main-text">
            I saw this as absurdly inefficient and a massive waste of time. In
            response, I designed a new marketing design system and template
            library that was easy to use and maintain for the team, that
            conformed to global design system standards from HQ.
          </p>
          <p className="main-text">
            I wrote a prototype template with basic HTML and CSS, with a focus
            on semantics, accessibility, and conformance to the marketing design
            system throughout the process. When I presented this prototype to
            the wider team, they were impressed and I got the green light to
            continue.
          </p>
          <p className="main-text"></p>
          <p className="main-text">
            After negotiations with our retail partners, we got buy-in for them
            to use our code. They would implement the template and design system
            we created for every new product launch. This was a massive win for
            us, as it meant we could now deliver a consistent experience across
            all of our retail partners, and we could do it in a fraction of the
            time it used to take.
          </p>
        </section>
        <section className="">
          <h2 className="main-heading">Impact</h2>
          <p className="main-text">
            - 64% increase in web traffic to{" "}
            <a href="https://www.pbtech.co.nz/brand/samsung?qr=samsung-brand-page">
              redesigned properties
            </a>
          </p>
          <p className="main-text">
            - 4X faster time to market for new product launches
          </p>
          <p className="main-text">
            - Cost savings by reducing hours required for each new product
            launch
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Samsung;
