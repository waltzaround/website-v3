import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./case.css";
function Cin7() {
  return (
    <>
      <Header />
      <section className="main-container">
        <h1 className="story-heading">
          <strong>Cin7.com</strong>
          <br />
          Helping small businesses transact billions of dollars across the world
          by building better ways to manage and sell products.
        </h1>
        <img src="/images/projects/cin7.webp" className="story-hero" />

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
              <h2>Role</h2>
              <p>Senior Product Designer (Nov 2020 - Sep 2022) </p>{" "}
            </div>
          </div>
          <div className="card">
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
              <li>Led the design of new features and products.</li>
              <li>Developed new features and improvements on the platform.</li>

              <li>
                Introduced new ways of working and systems that helped us track
                impact
              </li>

              <li>
                Condensed 10 different design systems into a single unified
                system
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
          </div>
        </div>
        <section className="about">
          <h2>How I got involved</h2>
          <p className="main-text">
            I joined Cin7 as a Senior Product Designer in 2019 after being
            shoulder tapped by an ex-colleague who was running the company at
            the time.
          </p>
          <p className="main-text">
            I was the first designer to be hired in a long time, and the company
            was in a state of turbulent flux. The company was growing rapidly,
            and the product was growing erratically with it. I had a joined a
            company with significant technical debt, and a product that was
            starting to show immense levels of system fragmentation. Think about
            it this way - product design at the time was owned by an engineering
            team of 50 people. Zero designers were involved.
          </p>

          <div className="card">
            <p>50 en</p>
          </div>
          <p className="main-text">
            It resulted in a product platform that felt like it was held
            together by duct tape across 15 different modules. had 8 different
            fonts in production, 50 different primary buttons and multiple
            implementations of each.
          </p>

          <p className="main-text">
            From peanut butter factories, to manufacturers of (legal) guns,
            drugs, alcohol, and sex toys - every business needs a way to track
            and sell products. I can probably break down my impact at Cin7 into
            four areas:
          </p>
          <div>
            <p>Developer experience</p>
            <p>Design experience</p>
            <p>Support experience</p>

            <p>Product experience</p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Cin7;
