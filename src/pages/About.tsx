import Header from "../components/Header";
import "../components/about.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      {" "}
      <canvas id="canv" width="32" height="32"></canvas>
      <div className="safariHack">
        <Header />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Walter Lim - About</title>
          <link rel="canonical" href="https://walt.online/about" />
        </Helmet>
        <section className="about-grid-2">
          <div>
            <video
              className="about-video"
              autoPlay
              playsInline
              loop
              muted
              src="/video/walt.mp4"
            ></video>
          </div>
          <div className="about-content">
            <h1>About me</h1>
            <p className="about-constrain">
              I’m a cross-functional designer with 7+ years of experience.{" "}
              <br />
              <br />I like solving problems, by making things with people. I’ve
              worked everywhere between ux research, product design, and
              frontend engineering to deliver real working products that
              actually help people. All of this in organisations from big to
              small.
              <br />
              <br />
              My past work ranges from making big multinational corporates lots
              of money through the targeted design, testing, and implementation
              of simple consumer-facing usability + accessibility improvements,
              all the way to helping b2b SaaS startups reduce churn, and get new
              features to market quickly through the delivery of simultaneous
              research, design, and code deliverables.
              <br />
              <br />
              When I put my UX engineering hat on, I thoroughly understand the
              little nuances of design and engineering collaboration. It saves a
              lot of time!
              <br />
              <br /> I’m the kind of designer that knows that using margin
              instead of padding in your components means that users are going
              to have a bad time on tablets and mobile devices because it often
              shrinks the effective touchable tap target area, making your app
              harder to interact with.
              <br />
              <br /> I'm the kind of engineer that understands the limitations
              and tradeoffs between unmoderated user research with a figma
              prototype, and moderated usability testing with a static react
              prototype without a backend. users cant input text into figma
              prototypes, and this skews results especially with forms and
              wizards that explicitly depend on accurate user input.
              <br />
              <br />
              My guiding belief is that if you don’t deliver useful, impactful
              outcomes for your users, your company and team haven’t earned your
              social license to operate.
              <br />
              <br />I am currently a design lead at{" "}
              <a
                title="Infinity Studio"
                href="https://infinitystudio.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Infinity Studio
              </a>
              , and volunteer my spare time designing and building things at{" "}
              <a
                href="https://haxx.nz"
                target="_blank"
                rel="noopener noreferrer"
              >
                haxx.nz
              </a>
            </p>
          </div>
        </section>
        <section className="job">
          <h2>Work History</h2>
          <div className="job-grid">
            <div className="job-listing">
              <div>
                <h3 className="job-company">Infinity Studio</h3>
                <aside className="job-industry">
                  Geotechnical Engineering{" "}
                </aside>
                <p className="job-title">Design Lead</p>
                <p className="job-timeline"> Mar 2023 → Now</p>
              </div>
              <div>
                <p className="job-description">
                  Infinity Studio develops software for the geotechnical
                  engineering sector, with an emphasis on automating tedious
                  workflows that engineers have to manually process, calculate,
                  and report on. As employee #1, I am responsible for product
                  design, and work closely with the engineering team to deliver
                  high quality, user-centered software that helps engineers do
                  their jobs better, faster, cheaper, with more accuracy.
                </p>
                <ul className="job-points">
                  <li>
                    Designed multiple digital products used by civil engineers
                    to build critical infrastructure{" "}
                  </li>
                  <li>
                    Products contributed to over $300k+ ARR revenue growth{" "}
                  </li>
                  <li>
                    Led design within a team of 15 engineers, and 3 product
                    managers{" "}
                  </li>
                  <li>
                    Set up design system that enabled engineers to self-serve UI
                    needs without me 90% of the time
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-listing">
              <div>
                <h3 className="job-company">GoBoxer.com</h3>
                <aside className="job-industry">
                  Insurance / Machine Learning
                </aside>
                <p className="job-title">Senior Product Designer</p>
                <p className="job-timeline"> Oct 2022 → Mar 2023</p>
              </div>
              <div>
                <p className="job-description">
                  Boxer was an insurance platform developed to programatically
                  generate insurance policies using machine learning. Most of my
                  work here involved design system optimisation.
                </p>
                <ul className="job-points">
                  <li>
                    Achieved buy-in and unified processes between dev and
                    design, speeding up product delivery
                  </li>
                  <li>
                    Designed and cross functionally delivered new features,
                    accessibility, and usability improvements.
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-listing">
              <div>
                <h3 className="job-company">Cin7.com</h3>
                <aside className="job-industry">Inventory Management</aside>
                <p className="job-title">Senior Product Designer</p>
                <p className="job-timeline"> Nov 2020 → Oct 2022</p>
              </div>
              <div>
                <p className="job-description">
                  Cin7 is a fully integrated, cloud-based inventory management
                  software system that streamlines stock management across
                  multiple channels.
                  <br /> I led a massive overhaul of their entire 20+ year old
                  frontend, and improved design practices across the entire
                  company while working there. Learn more at the{" "}
                  <Link to="/work/cin7">case study here</Link>.
                </p>
                <ul className="job-points">
                  <li>
                    Reduced cycle time for frontend projects 50% by implementing
                    a design system.
                  </li>
                  <li>
                    Triaged, and implemented accessibility & usability
                    improvements with my team.
                  </li>
                  <li>
                    Reduced churn by millions of dollars in ARR by doing the
                    above.
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-listing">
              <div>
                <h3 className="job-company">Samsung Electronics NZ</h3>
                <aside className="job-industry">Consumer Electronics</aside>
                <p className="job-title">UX Consultant (Contract)</p>
                <p className="job-timeline"> Aug 2020 → Nov 2020</p>
              </div>
              <div>
                <p className="job-description">
                  I was contracted to improve the system usability of their
                  online ecommerce presence within partner stores in new
                  zealand. Learn more at the{" "}
                  <Link to="/work/samsung">case study here</Link>.
                </p>
                <ul className="job-points">
                  <li>
                    Directly responsible for a 64% YoY increase in NZ ecommerce
                    traffic + seven-figure revenue increase.
                  </li>
                  <li>
                    Designed & built usability improvements for web ecommerce
                    projects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-listing">
              <div>
                <h3 className="job-company">Swiftly.nz</h3>
                <aside className="job-industry">Ecommerce</aside>
                <p className="job-title">Designer, Co-founder</p>
                <p className="job-timeline"> Mar 2020 → Feb 2023</p>
              </div>
              <div>
                <p className="job-description">
                  Swiftly was an online store builder that I co-founded with 2
                  friends during the COVID-19 lockdown in New Zealand. Learn
                  more at the <Link to="/work/swiftly">case study here</Link>.
                </p>
                <ul className="job-points">
                  <li>
                    Helped 1000+ small local businesses sign up and earn over
                    $700,000 NZD while operational.
                  </li>
                  <li>Used by over 186,000+ unique users to shop local</li>
                </ul>
              </div>
            </div>
            <div className="job-listing">
              <div>
                <h3 className="job-company">Voluntarily.nz</h3>
                <aside className="job-industry">Volunteer Management</aside>
                <p className="job-title">Design Lead</p>
                <p className="job-timeline"> Jan 2019 → Aug 2020</p>
              </div>
              <div>
                <p className="job-description">
                  Voluntarily was a volunteering platform run by the{" "}
                  <a href="https://www.pamfergusson.org.nz/">
                    Pam Fergusson Charitable Trust
                  </a>
                  . I joined as a designer to help make it real and get the
                  technology industry into schools to mentor children, but the
                  launch in schools across New Zealand was cancelled by the
                  onset of the COVID-19 pandemic.
                </p>
                <ul className="job-points">
                  <li>
                    Designed & built open source software with 100+ developers
                  </li>
                  <li>
                    Ran usability research across New Zealand with teachers and
                    school principals, mostly in rural areas
                  </li>
                  <li>Trained junior designers and developers</li>
                </ul>
              </div>
            </div>
            <div className="job-listing">
              <div>
                <h3 className="job-company">Qrious / Spark New Zealand</h3>
                <aside className="job-industry">Telecommunications</aside>
                <p className="job-title">UX Designer</p>
                <p className="job-timeline"> Jan 2017 → Feb 2019</p>
              </div>
              <div>
                <p className="job-description">
                  Worked on lots of different tools and platforms for Spark New
                  Zealand and Qrious that served the tourism, transport, and
                  marketing industries.
                </p>
                <ul className="job-points">
                  <li>
                    Designed tools that analysed marketing emails, texts, and
                    push notifications
                  </li>
                  <li>Performed UX design and guerilla usability testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default About;
