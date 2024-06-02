import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../components/case.css";
import { useEffect } from "react";
function Swiftly() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Swiftly Ecommerce</title>
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Swiftly</strong>
          <br />
          Helping 1,200+ small kiwi stores make over $700K NZD by selling stuff online, with
          a tool built in two days during the 2020 COVID lockdown.
        </h1>
        <img src="/images/projects/swiftly.png" className="story-hero" />

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Swiftly is a simple web app that helps small stores start
                selling online in minutes. Was responsible for UX research,
                design, and frontend in a team of three. Originally built in 48
                hours for a hackathon.
                <br />
              </p>
              <br />
            </div>
            <div>
              <h3>Role</h3>
              <p>
                Designer, Frontend Developer
                <br /> (Mar 2020 → Feb 2023){" "}
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
                During the 2020 COVID lockdown, I got together with three
                friends as a product team and we used our their skills to make
                ecommerce easier for fellow kiwis at the Hack the Crisis
                hackathon.
              </li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>
                We designed and built a working ecommerce system with inventory
                management and invoicing in 48 hours with three people.
              </li>
              <li>
                We helped 1,200+ small local businesses ear revenue as COVID
                restrictions affected trade in New Zealand during the lockdowns.
              </li>
              <li> GMV of over $700,000 NZD</li>
            </ul>
          </div>
        </div>
        <section className="stat-container">
          <div>
            <h3> 48 hours </h3>
            <p>From idea to launch</p>
          </div>
          <div className="stat-divider"></div>
          <div>
            <h3>1,200+</h3>
            <p>Local businesses on Swiftly</p>
          </div>
          <div className="stat-divider"></div>
          <div>
            <h3>
              <small>$</small>700,000+{" "}
            </h3>
            <p>NZD in earnings</p>
          </div>
        </section>
        <section className="stat-container">
          <div>
            <h3>17,000+</h3>
            <p>orders fulfilled</p>
          </div>
          <div className="stat-divider"></div>
          <div>
            <h3>168,000+ </h3>
            <p>Unique Users</p>
          </div>
          <div className="stat-divider"></div>
          <div>
            <h3>1,200,000+ </h3>
            <p>Pageviews Served</p>
          </div>
        </section>

        <div className="embed-container">
          <iframe
            src="https://www.youtube.com/embed//mv9CAP2OWX4"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="main-text">
          <h3>Initial steps</h3>
          <p>
            <br />
            We started by choosing a hypothesis. "How hard is it to sell
            online?"
            <br />
            <br />
            The entire team performed quick & dirty ethnographic research
            remotely with small businesses, as well as usability testing on
            competing products. It turns out that only half of our surveyed
            businesses were able to sell online, and many small businesses
            struggled with incumbent offerings. <br />
            <br />
            One of the participants took hours to create a Shopify store, and
            many participants ended up either failing to complete the test, or
            quitting in frustration. To avoid contamination, we told them
            nothing about our hypothesis, and that we were just interested in
            how they ran their businesses during COVID.
            <br />
            <br />
            As a team, we then synthesized the research into user needs, which
            were then mapped into functional requirements, user flows and a
            sitemap. The fact that we also had to legally comply with lockdown
            requirements also added additional constraints to design and
            development.
            <br />
            <br />
            We then mapped out the data into a simple schema, and split the work
            responsibilities between functionality and markup so that
            development could begin as barebones functionality while I fleshed
            out the rest of the user flows and design. <br />
            <br />
          </p>
        </div>
        <img
          src="/images/swiftly/swiftly-2.png"
          alt="Draft documentation"
          className="main-image"
        />
        <img
          src="/images/swiftly/swiftly-1.png"
          alt="Draft documentation"
          className="main-image"
        />
        <div className="main-text">
          <h3>Lo-fi prototyping</h3>
          <p>
            <br />
            To keep things in sync as a remote team, we livestreamed the designs
            as they were being mocked and collaboratively proposed designs to
            each other as the wireframes developed. Lo-fi designs that only
            demonstrated the happy path as well as expected behavior were
            explored, and subsequently developed in parallel as the high
            fidelity designs were put together.
          </p>
        </div>
        <img
          src="/images/swiftly/swiftly-3.png"
          alt="Draft documentation"
          className="main-image"
        />
        <img
          src="/images/swiftly/swiftly-4.png"
          alt="Draft documentation"
          className="main-image"
        />
        <div className="main-text">
          <h3>Hi-fi prototyping</h3>
          <p>
            <br />
            By the time the functionality was built with barely any CSS markup,
            the high fidelity designs were done. Given that we only had 48 hours
            to ship, I made extensive use of Uber's Base Web component library
            to save time and not have to deal with tricky components like
            complex inputs. After completing the hi-fi designs, I joined the
            rest of the team on development by writing frontend code and
            polishing bits of the user flows that needed attention.
          </p>
        </div>
        <img
          src="/images/swiftly/swiftly-5.png"
          alt="Draft documentation"
          className="main-image"
        />
        <img
          src="/images/swiftly/swiftly-6.png"
          alt="Draft documentation"
          className="main-image"
        />
        <div className="main-text">
          <h3>Frontend development</h3>
          <p>
            <br />
            Most of my remaining time was spent writing react components, and
            cleaning up how components behaved responsively. I don't have many
            screenshots unfortunately, nor is the repository public, but I can
            show how I review responsive behavior here. I usually pair a tool
            called Solis with Visual Studio Code... Unless you want some
            screenshots of a Code Editor or IDE? 😅
          </p>
        </div>
        <img
          src="/images/swiftly/swiftly-7.png"
          alt="Draft documentation"
          className="main-image"
        />
        <img
          src="/images/swiftly/swiftly-8.png"
          alt="Draft documentation"
          className="main-image"
        />
        <div className="main-text">
          <h3>Post-launch</h3>
          <p>
            <br />
            An hour after we launched Swiftly, we had ten organic signups. After
            a week, we had about 200. To date, we've helped 1,200+ stores earn
            over $700,000 in revenue. The service was shut down in February 2023
            as it served it's purpose.
          </p>
        </div>
        <img
          src="/images/swiftly/stats.png"
          alt="Draft documentation"
          className="main-image"
        />

        <div className="embed-container">
          <iframe
            src="https://www.youtube.com/embed/XJegSV6GMtQ"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <img
          src="/images/swiftly/swiftly-12.png"
          alt="Draft documentation"
          className="main-image"
        />
      </section>
      <Footer />
    </>
  );
}
export default Swiftly;
