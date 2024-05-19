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
          From peanut butter factories, to manufacturers of (legal) guns, drugs,
          alcohol, and sex toys - every business needs a way to track and sell
          products.
        </h1>
        <div className="grid-2">
          <div>
            <h2>Responsibilities</h2>
            <p>- Senior Product Designer </p>{" "}
            <p>- UX Engineer (Angular, ASP.Net, React, jQuery)</p>
          </div>
          <div>
            <h2>Challenge</h2>
            <p>
              As a single designer, I was faced with a ridiculously large
              backlog of technical debt, and lots of usability issues.{" "}
            </p>
            <p>
              Asked to deliver value as a single designer when paired with 50
              engineers, and 8 product managers.
            </p>
            <h2>Response</h2>
            <p>
              Led the design of new features and products, to tangibly improve a
              platform that helps businesses transact billions of US dollars
              every month.
            </p>
            <p>
              Introduced new ways of working and systems that helped us track
              impact
            </p>
            <p>
              Reduced churn by millions of dollars by implementing usability
              improvements for users.
            </p>
            <p>
              Massively reduced friction throughout the platform. This included
              internal development and support experience, on top of the UX.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Cin7;
