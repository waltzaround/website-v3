import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./case.css";
function Vaxx() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Swiftly Ecommerce</title>
      </Helmet>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Vaxx</strong>
          <br />
          Making it easier for New Zealanders to find COVID-19 vaccinations
          during the 2020 COVID lockdowns and vaccine shortage
        </h1>
        <img src="/images/projects/vaxx.png" className="story-hero" />

        <div className="grid-intro">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Vaxx.nz was an open source web app that helped people find COVID
                vaccinations.
                <br /> <br />
              </p>
              <p>
                Kinda&nbsp;
                <a
                  href="https://twitter.com/search?q=vaxx.nz&amp;src=typed_query"
                  target="_blank"
                >
                  blew up in popularity
                </a>{" "}
                during the 2020 COVID lockdowns in New Zealand. <br />
                <br />
                Ended up{" "}
                <a
                  href="https://www.parliament.nz/en/pb/order-paper-questions/written-questions/document/WQ_40023_2021/40023-2021-chris-bishop-to-the-minister-for-covid-19"
                  target="_blank"
                >
                  collaborating with the New Zealand Ministry of Health
                </a>{" "}
                to ship features faster and keep the system stable.
              </p>
              <br />
            </div>
            <div>
              <h3>Role</h3>
              <p>
                Designer, FOSS Maintainer
                <br /> (Sep 2021 → Now){" "}
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

                <div className="category-tag">Open Source </div>

                <div className="category-tag">Internationalizaton </div>
                <div className="category-tag">Web Accessibility </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Challenge</h2>
            <ul>
              <li>
                New Zealanders were finding it difficult and frustrating to book
                their COVID-19 vaccinations and churning as a result.
              </li>
              <li>
                Official services made it difficult to search vaccination
                bookings by date and this resulted in hundreds of additional
                clicks.
              </li>
              <li>
                People were not getting vaccinated because of the friction
                experienced during the booking process.
              </li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>
                With a group of friends, we reverse engineered and scraped
                vaccination booking data.
              </li>
              <li>
                I then facilitated a design-led process where we co-created a
                better search experience for users in 48 hours.{" "}
                <a
                  target="_blank"
                  href="https://twitter.com/search?q=vaxx.nz&amp;src=typed_query"
                >
                  The public seems to like it.
                </a>
              </li>
              <li>
                {" "}
                We ended up helping 99,000+ people get vaccinated faster by
                removing friction from the process.
              </li>
            </ul>
          </div>
        </div>
        <section className="stat-container">
          <div>
            <h3>99,000+</h3>
            <p>people helped</p>
          </div>
          <div className="stat-divider"></div>
          <div>
            <h3>121,000+ </h3>
            <p>user sessions</p>
          </div>
          <div className="stat-divider"></div>
          <div>
            <h3> 48 hours </h3>
            <p>from idea to launch</p>
          </div>
        </section>
        <section>
          <div className="embed-container">
            <iframe
              src="https://www.youtube.com/embed//erZ6kTJTpmI"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="main-text">
            <h3>Initial steps</h3>
            <p>
              <br />
              A friend's wife complained about how hard it was to book a
              COVID-19 vaccine online.
              <br />
              <br />
              A quick user interview yielded that it was painful to search for
              bookings, and that the only bookings she could find were months
              away. We gathered some mates on Discord as we had just gone into
              another lockdown in New Zealand, and got to work remotely to
              maintain social distancing.
              <br />
              <br />
              Some of our developers split off to do some scoping to see what
              was feasible with the data. After a few technical discoveries and
              a little bit of journey mapping we decided on a calendar approach
              to test with users in response. I opted for the bare minimum
              wireframing required to explain workflows and concepts and to keep
              everyone on the same page.
              <br />
              <br />
              <strong>Existing workflow:</strong>
              <br />→ Search for a vaccination
              <br /> → Click into an individual vaccination site
              <br />→ See available vaccination bookings for that individual
              site
              <br />→ go back to the search page and click on another
              vaccination site
              <br />→ Repeat this process 60+ times until you find an
              appointment the same week
              <br />→ Make a booking
              <br />
              <br />
              <strong>Our workflow:</strong>
              <br />→ Search for a vaccination
              <br />→ One click on the day you want to get vaccinated <br />→
              Make a booking
            </p>
          </div>
          <img
            src="/images/vaxx/vaxx-1.png"
            alt="Draft documentation"
            className="main-image"
          />
          <img
            src="/images/vaxx/vaxx-2.png"
            alt="Draft documentation"
            className="main-image"
          />
          <div className="main-text">
            <h3>Designing in a dev environment</h3>
            <p>
              <br />
              Given that our little project was heavily constrained by dirty
              data pulled by hackily scraping govt websites, we had to be
              pragmatic with our design process. There were disgusting regexes,
              and dirty, dirty hacks everywhere. It was a painful balancing act
              in terms of product prioritization; on one hand you have the
              experience you want to test with the user, and at the other you
              have to contend with reality and what you can actually ship in a
              short amount of time. We ditched figma at this point and went
              straight into the frontend to save time on implementation.
            </p>
          </div>
          <img
            src="/images/vaxx/vaxx-3.png"
            alt="Draft documentation"
            className="main-image"
          />
          <div className="main-text">
            <h3>Initial launch</h3>
            <p>
              <br />
              We launched on Twitter, Reddit and LinkedIn and gained a little
              bit of traffic initially, peaking at over 23,000 unique users in a
              single day. As feedback came in over twitter and emails, we had to
              make sure we were ready to make improvements and scale.
              prioritised. We started preparing to open the floodgates to
              contributors to scale as an open source project over discord and
              GitHub. To remain focused, I put together a triage workflow using
              GitHub issues and GitHub kanban boards.
            </p>
          </div>
          <img
            src="/images/vaxx/vaxx-4.png"
            alt="Draft documentation"
            className="main-image"
          />

          <div className="main-text">
            <h3>Current State</h3>
            <p>
              We've received some press, and maintain a public discord community
              with about 60 contributors. We've shipped several big updates
              since launching, including internationalization and pulling
              walk-in venue locations where people can get vaccinated without an
              appointment.
              <br />
              <br /> We run guerrilla usability testing every so often to test
              new and existing workflows, and generally catch most of the issues
              that way. Anything that needs more design or engineering work gets
              logged as an issue on GitHub, and open source contributors pick it
              up from there.
              <br />
              <br />
              The site saw about a thousand unique users a day when it was in
              use according to GA, and we're pretty happy as a team as we know
              for a fact that the website we've built has helped a lot of people
              get vaxxed.
            </p>
            <br />
            <br />
            <br />
            <p>
              <strong>Media</strong>
              <br />
              The Project:
              <a
                href="https://www.youtube.com/watch?v=erZ6kTJTpmI"
                target="_blank"
              >
                Developers build useful vaccine booking website
              </a>
              <br />
              Stuff New Zealand:
              <a
                href="https://www.stuff.co.nz/national/health/coronavirus/126293947/covid19-hackathon-creates-faster-way-to-find-a-covid19-vaccine-near-you"
                target="_blank"
              >
                Covid-19: 'Hackathon' creates faster way to find a Covid-19
                vaccine near you
              </a>
              <br />1 News (TVNZ):
              <a
                href="https://www.tvnz.co.nz/one-news/new-zealand/kiwi-friends-build-website-help-speed-up-vaccinations"
                target="_blank"
              >
                Kiwi friends build website to help speed up vaccinations
              </a>
              <br />
              NZ Business Desk:
              <a
                href="https://businessdesk.co.nz/article/news-in-brief/developers-build-better-vaccine-booking-website"
                target="_blank"
              >
                Developers build better vaccine booking website
              </a>
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Vaxx;
