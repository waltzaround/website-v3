import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./case.css";
function Cin7() {
  return (
    <>
      <Header />
      <section className="main-container">
        <img src="/images/projects/cin7.webp" className="story-hero" />
        <h1 className="story-heading">
          <strong>Cin7.com</strong>
          <br />
          Helping small businesses transact billions of dollars across the world
          by building better inventory management software
        </h1>
        <div className="grid-2">
          <div>
            <div>
              <h2>About</h2>
              <p>
                Cin7 is an inventory management system that helps people that
                sell physical products track stock, sales, and customers across
                every imaginable online and offline retail channel.
              </p>
            </div>
            <div>
              <h2>Roles</h2>
              <p>- Senior Product Designer </p>{" "}
              <p>- UX Engineer (Angular, ASP.Net, React, jQuery)</p>
              <p>- Salesforce Admin</p>
            </div>
          </div>
          <div>
            <h2>Challenge</h2>
            <ul>
              <li>
                As a single designer, I was faced with a ridiculously large
                backlog of technical debt, and lots of usability issues.{" "}
              </li>
              <li>
                Asked to deliver value as a single designer when paired with 50
                engineers, and 8 product managers.
              </li>
              <li>
                Massive design fragmentation. 8 different fonts in production,
                50 different primary buttons and multiple implementations of
                each
              </li>
            </ul>
            <h2>Response</h2>
            <ul>
              <li>
                Shipped tangible improvements either by myself, or with my team
                to help businesses transact billions of US dollars in product
                sales every month.
              </li>
              <li>Led the design of new features and products. </li>

              <li>
                Introduced new ways of working and systems that helped us track
                impact
              </li>
              <li>
                Reduced churn by millions of dollars by implementing usability
                improvements for users.
              </li>
              <li>
                Massively reduced friction throughout the platform. This
                included internal development and support experience, on top of
                the UX.
              </li>
            </ul>
            <h2>How this work came to being</h2>
            <p>
              I joined Cin7 as a Senior Product Designer in 2019 after being
              shoulder tapped. I was the first designer to join the company in 2
              years. The company had grown from 50 to 200 people in that time,
              and the product had grown from a simple inventory management
              system to a full-blown ERP system.
            </p>
            <h2>
              From peanut butter factories, to manufacturers of (legal) guns,
              drugs, alcohol, and sex toys - every business needs a way to track
              and sell products. I can probably break down my impact at Cin7
              into four areas:
            </h2>
            <div>
              <p>Support experience</p>
              <p>Support experience</p>
              <p>Support experience</p>
              <p>Support experience</p>
            </div>

            <p>
              Multiple designers had tried and failed before me to tame the
              system, resulting in a lot of half finisghed projects and
              fragmantation. throughout the product.Four different attempts at
              design system all half implemented in the product.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Cin7;
